const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req,res) => {
    res.status(200).json({ message: "Get all contacts" });
});

//@desc Create new contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req,res) => {
    console.log("The request body is :", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({ message: "create contact" });
});

//@desc get new contacts
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message: `Get contacts for ${req.params.id}` });
});

//@desc Update new contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete contact
//@route POST /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req,res) => {
    res.status(201).json({ message: `Delete contact for ${req.params.id}` });
});


module.exports = {
    getContact, 
    createContact,
    getContacts,
    updateContact,
    deleteContact
};