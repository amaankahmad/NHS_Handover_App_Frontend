create table task (
                      id SERIAL PRIMARY KEY,
                      patientName varchar(128) NOT NULL,
                      MRNNumber varchar(128) NOT NULL,
                      Priority varchar(128) NOT NULL,
                      taskType varchar(128) NOT NULL,
                      seniority varchar(128) NOT NULL,
                      covidStatus varchar(128) NOT NULL,
                      schedule varchar(128),
                      additionalNotes varchar(2048)
);

create table doctor (
                        id SERIAL PRIMARY KEY,
                        name varchar(128) NOT NULL,
                        password varchar(128) NOT NULL,
                        role varchar(128) NOT NULL
);
