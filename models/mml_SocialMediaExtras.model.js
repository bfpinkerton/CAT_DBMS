// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const SocialMediaExtras = sequelize.define("SocialMediaExtras", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        // What MML entry is this relating to
        MMLrelatedID: {
            type: Sequelize.INTEGER,
            references: {
                // This is a reference to another model
                model: 'MMLs',
                // This is the column name of the referenced model
                key: 'id'
            }
        },
        //
        christmasCard: {
            type: Sequelize.BOOLEAN,
        },
        //
        birthdayEmail: {
            type: Sequelize.BOOLEAN,
        },
        //
        facebookAuthorizationDate: {
            type: Sequelize.STRING,
        },
        //
        newsletterAuthorization: {
            type: Sequelize.STRING,
        },
        //
        willSendPhoto: {
            type: Sequelize.BOOLEAN,
        },
        //
        photoFurnished: {
            type: Sequelize.STRING,
        },
        //
        declinedAllBirthday: {
            type: Sequelize.STRING,
        },
        //
        followCMOnFB: {
            type: Sequelize.BOOLEAN,
        },
        //
        followUpFB: {
            type: Sequelize.STRING,
        },
        //
        followedDateFB: {
            type: Sequelize.STRING,
        },
        //
        followCMOnLI: {
            type: Sequelize.BOOLEAN,
        },
        //
        followUpLI: {
            type: Sequelize.STRING,
        },
        //
        followedDateLI: {
            type: Sequelize.STRING,
        },
        //
        offeredFollowAFS: {
            type: Sequelize.BOOLEAN,
        },
        //
        followUpAFS: {
            type: Sequelize.STRING,
        },
        //
        followedDateAFS: {
            type: Sequelize.STRING,
        },
        //
        facebook: {
            type: Sequelize.BOOLEAN,
        },
        //
        linkedIn: {
            type: Sequelize.BOOLEAN,
        },
        //
        instagram: {
            type: Sequelize.BOOLEAN,
        },
        //
        twitter: {
            type: Sequelize.BOOLEAN,
        },
        //
        none: {
            type: Sequelize.BOOLEAN,
        },
        

    });
  
    return SocialMediaExtras;
  };