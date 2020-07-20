// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const SocialMedia = sequelize.define("SocialMedia", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        // What MAL entry is this relating to
        MALrelatedID: {
            type: Sequelize.INTEGER,
            references: {
                // This is a reference to another model
                model: 'MALs',
                // This is the column name of the referenced model
                key: 'id'
            }
        },
        //
        noSocialMedia: {
            type: Sequelize.BOOLEAN,
        },
        //
        hasFacebook: {
            type: Sequelize.STRING,
        },
        //
        facebookAccount: {
            type: Sequelize.STRING,
        },
        //
        facebookDate: {
            type: Sequelize.DATEONLY,
        },
        //
        hasLinkedin: {
            type: Sequelize.STRING,
        },
        //
        linkedinAccount: {
            type: Sequelize.STRING,
        },
        //
        linkedinDate: {
            type: Sequelize.DATEONLY,
        },
        //
        hasTwitter: {
            type: Sequelize.STRING,
        },
        //
        twitterAccount: {
            type: Sequelize.STRING,
        },
        //
        twitterDate: {
            type: Sequelize.DATEONLY,
        },
        //
        hasInstagram: {
            type: Sequelize.STRING,
        },
        //
        instagramAccount: {
            type: Sequelize.STRING,
        },
        //
        instagramDate: {
            type: Sequelize.DATEONLY,
        },
    });
  
    return SocialMedia;
  };