-- Users Table
CREATE TABLE PortfolioUsers (
                       id SERIAL PRIMARY KEY,
                       email VARCHAR(255) UNIQUE NOT NULL,
                       password VARCHAR(255) NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



--Project table
CREATE TABLE PortfolioProjects (
                       id SERIAL PRIMARY KEY,
                       title VARCHAR(255) UNIQUE NOT NULL,
                       description VARCHAR(500) NOT NULL,
                       liveDemoUrl VARCHAR(255) NULL,
                       mediaUrl VARCHAR(255) NULL,
                       githubUrl VARCHAR(255) NOT NULL,
                       tags VARCHAR[] NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


--BlogPost table
CREATE TABLE PortfolioBlogPosts (
                         id SERIAL PRIMARY KEY,
                         title VARCHAR(255) UNIQUE NOT NULL,
                         excerpt VARCHAR(500) NOT NULL,
                         coverImageUrl VARCHAR(255) NOT NULL,
                         category VARCHAR(255) NULL,
                         tags VARCHAR[] NULL,
                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

