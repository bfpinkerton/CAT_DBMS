// TODO: Ask Arlene about which fields are required
module.exports = (sequelize, Sequelize) => {
    const MAL = sequelize.define("MAL", {
        // --Metadata--
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        creation: {
            type: "TIMESTAMP",
            allowNull: false
        },
        originator: {
            type: Sequelize.STRING,
            allowNull: false
        },
        // How should we express an arbitrary amount of possible updates
        // Additional Updates Table
        updateEntry: {

        },

        // TODO
        // --Association Photo--
        // (1) Save file name of photo and search file directory
        // OR (2) Separate table for photos
        // Still figuring out best way to story photo

        // --Primary Association Information--
        legalName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        aka: {
            type: Sequelize.STRING,
        },
        clientAcctNum: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fileName: {
            type: Sequelize.STRING,
        },
        statusInFirm: {
            type: Sequelize.STRING,
            allowNull: false
        },
        specialClassification: {
            type: Sequelize.STRING,
        },
        asscType: {
            type: Sequelize.STRING,
            allowNull: false
        },
        scndMHPAssc: {
            type: Sequelize.STRING,
        },
        domicileCounty: {
            type: Sequelize.STRING,
            allowNull: false
        },
        domicileCity: {
            type: Sequelize.STRING,
            allowNull: false
        },
        domicileZip: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        // --General Board Member Related Information--
        // TODO

        // --Individual Board Member Related Information--
        // How should we express an arbitrary amount of Board Members
        // Board Members Table
        // TODO
        boardMembers: {

        },

        // TODO
        // -- Representation Inquiries--
        // Multiple Tables ------
        repInquiries: {

        },

        // --Organization Information--
        // TODO

        // --Merchandise Purchases--
        // TODO

        // --Birthdays, & Contests--
        // TODO: Birthday needs to become individual for each board member/manager
        // Social media needs a separate table
        // Possible alternative: table that just records SM platform and account associated with it that relates back to entry
        // TODO: Most Awesome Information request needs to become individual for each board member/manager
        // TODO

        // --Gifts--
        // TODO: Look into if gifts needs to be "personalized"
        // TODO: Each gift refers to a board member
        // TODO

        // --Supplemental Association Information--
        // TODO

        /*
            The below "sections" should all require additional tables
        */

        // --Management Information--
        // TODO

        // --Hiring Information--
        // Need separate table
        // TODO

        // --Termination Information--
        // Need separate table
        // TODO

        // --Referrals--
        // Need separate table
        // TODO

        // --Presentation Information--
        // Need separate table
        // TODO

        // --Potential Client Status Report--
        // Multiple status reports
        // TODO

    });
  
    return MAL;
  };