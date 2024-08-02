const db = require('../db');

const fileTypes = {
    image: 'image',
    video: 'video',
    audio: 'audio',
    document: 'document'
}

const fileExtentions = {
    image: ['png', 'jpg'],
    video: ['mkv', 'mp4'],
    audio: ['flac', 'mp3'],
    document: ['pdf']
}

const getFileType = (fileName) => {

    const extension = fileName.split('.').pop().toLowerCase();

    for (const [type, extensions] of Object.entries(fileExtentions)) {
        if (extensions.includes(extension)) {
            return type;
        }
    }

    return null;
};

const getUserFiles = async ({ userId, type }) => {
    try {

        if (!Object.values(fileTypes).includes(type)) {
            throw new Error(`Invalid file type: ${type}.`);
        }

        // TODO fix the query to include shared files
        const result = await db.query(
            `SELECT 
                DISTINCT f.file_id, 
                f.location,
                f.size,
                f.create_date
                t.*
            FROM file f
            LEFT JOIN $2 t on f.file_id = t.file_id 
            WHERE 
                f.user_id = $1
            AND 
                f.type = $2;
            `
            , [userId, type]);

        return [true, result.rows];
    }
    catch (err) {
        console.error('Error:', err);
        return [false, err];
    }
}


const addFile = async ({ userId, location, type, size, metadata }) => {
    try {

        if (!Object.values(fileTypes).includes(type)) {
            throw new Error(`Invalid file type: ${type}.`);
        }

        const result = await db.query(
            `INSERT INTO file (user_id, location, type, size)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *`,
            [userId, location, type, size]
        );

        let media, ok;
        if (type === fileTypes.video) {
            [ok, media] = addVideo(metadata);
        }

        return [true, { ...result.rows[0], ...metadata }];
    } catch (err) {
        console.error('Error:', err);
        return [false, err];
    }
};


const addVideo = async ({ fileId, length, width, height, bitRate }) => {
    try {
        const fileCheckResult = await db.query(
            'SELECT * FROM file WHERE file_id = $1 AND type = \'video\'',
            [fileId]
        );

        if (fileCheckResult.rows.length === 0) {
            throw new Error('File ID does not exist.');
        }

        const result = await db.query(
            `INSERT INTO video (file_id, length, width, height, bit_rate)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [fileId, length, width, height, bitRate]
        );

        return [true, result.rows[0]];
    } catch (err) {
        console.error('Error:', err);
        return [false, err];
    }
};

module.exports = {
    addFile,
    getFileType,
    fileTypes,
}