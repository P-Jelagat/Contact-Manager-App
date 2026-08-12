//@desc Get All Contacts
// @route GET /api/contacts
// @access public

const getContacts = (req,res) => {
    res.status(200).json({message:`Get All Contacts` });
}

//@desc Get One Contact
// @route GET /api/contacts
// @access public

const getContact = (req,res) => {
    res.status(200).json({message:`Get contact for: ${req.params.id}` });
}

//@desc Create One Contact
// @route POST /api/contacts
// @access public

const createContact = (req,res) => {

    console.log("The request body is:",req.body);
    
    const {name,email,phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    res.status(200).json({message:`Create contact` });
}

//@desc Update One Contact
// @route PUT /api/contacts
// @access public

const updateContact = (req,res) => {
    res.status(200).json({message:`Update contact for: ${req.params.id}` });
}

//@desc Delete One Contact
// @route DELETE /api/contacts
// @access public

const deleteContact = (req,res) => {
    res.status(200).json({message:`Delete contact for: ${req.params.id}` });
}

module.exports = { getContact,getContacts,createContact,updateContact,deleteContact };