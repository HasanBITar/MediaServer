const ffmpeg = require('fluent-ffmpeg');

/**
 * Get video metadata.
 * @param {string} filePath - Path to the video file.
 * @returns {Promise<Object>} - Video metadata including duration, width, height, and bit rate.
 */
async function videoReader(filePath) {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(filePath, (err, metadata) => {
      if (err) {
        return reject(err);
      }

      const videoStream = metadata.find(stream => stream.codec_type === 'video')

      const info = {
        duration: metadata.format.duration,
        width: videoStream.width,
        height: videoStream.height,
        bit_rate: videoStream.bit_rate,
      };

      resolve(info);
    });
  });
}

module.exports = {
  videoReader,
}
