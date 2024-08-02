CREATE TABLE "user" (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profile_photo TEXT,
    is_admin BOOLEAN DEFAULT FALSE
);


CREATE TABLE "file" (
    file_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES "user"(user_id),
    location VARCHAR(1000) NOT NULL,
    type VARCHAR(20) CHECK (type IN ('image', 'video', 'audio', 'book')),
    size INT NOT NULL,
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);