const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);

const users = [
    {
        type: "ADMIN",
        f_name: "admin",
        l_name: "admin",
        father_name: "admin",
        national_num: "100000000",
        email: "admin@admin.com",
        phone: "0999999999",
        username: "admin1",
        password: bcrypt.hashSync("admin1", salt),
        id_card_front: "test",
        id_card_back: "test",
    },
    {
        type: "EXECUTOR",
        f_name: "admin",
        l_name: "admin",
        father_name: "admin",
        national_num: "200000000",
        email: "admin2@admin.com",
        phone: "0999999999",
        username: "admin2",
        password: bcrypt.hashSync("admin2", salt),
        id_card_front: "test",
        id_card_back: "test",
    },
    {
        status: "REJECTED",
        type: "EXECUTOR",
        f_name: "admin",
        l_name: "admin",
        father_name: "admin",
        national_num: "300000000",
        email: "admin3@admin.com",
        phone: "0999999999",
        username: "admin3",
        password: bcrypt.hashSync("admin3", salt),
        reject_message: "reject reject reject",
        id_card_front: "test",
        id_card_back: "test",
    },
    {
        status: "BANNED",
        type: "EXECUTOR",
        f_name: "admin",
        l_name: "admin",
        father_name: "admin",
        national_num: "400000000",
        email: "admin4@admin.com",
        phone: "0999999999",
        username: "admin4",
        password: bcrypt.hashSync("admin4", salt),
        bann_message: "banned banned banned",
        id_card_front: "test",
        id_card_back: "test",
    },
];

module.exports = { users };
