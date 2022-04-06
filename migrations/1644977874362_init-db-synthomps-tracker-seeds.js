/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(
        `
            INSERT INTO synthomps (name, image, description) VALUES ('Headache', 'https://www.regionalneurological.com/wp-content/uploads/2019/08/AdobeStock_244803452.jpeg', 'The main symptom of a headache is a pain in your head or face. This can be throbbing, constant, sharp or dull.');
            INSERT INTO synthomps (name, image, description) VALUES ('Stomach Pain', 'https://virinchihospitals.com/wp-content/uploads/2019/02/stomachpain-1024x555.jpg', 'Pain in the abdomen may be aching, stabbing, burning, twisting, cramping, dull, or gnawing.');
            INSERT INTO synthomps (name, image, description) VALUES ('Back Pain', 'https://www.sosbones.com/media/eb2dplym/back-pain-from-sos.jpg', 'Back pain can range from a muscle aching to a shooting, burning or stabbing sensation.');
            INSERT INTO synthomps (name, image, description) VALUES ('Vomit', 'https://easyscienceforkids.com/wp-content/uploads/2018/04/Vomit-facts-18-4-1-758x635.jpg', 'Is the involuntary, forceful expulsion of the contents of one is stomach through the mouth');
            INSERT INTO synthomps (name, image, description) VALUES ('Gastristis', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YnNSu16mFD1iH8t78zrA3AWIdDim6VUjFg&usqp=CAU', 'Gastritis is a general term for a group of conditions with one thing in common: Inflammation of the lining of the stomach.');
            INSERT INTO synthomps (name, image, description) VALUES ('Flu', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJauOh7aX4v915GJu9gBFFqYGfXimYwZ2qng&usqp=CAU', 'Is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and lungs.');
        `
    );
};

exports.down = pgm => {};
