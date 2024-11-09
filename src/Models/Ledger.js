import mongoose from "mongoose";
import { TYPE_OF_ACCOUNTS } from "@/lib/constants";

let Schema = mongoose.Schema

const LedgerSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    label: {
        type: String,
        required: [true, "Please provide a label for this account."],
        maxlength: [100, "Label cannot be more than 100 characters."]
    },
    description: {
        type: String,
    },
    openingBalance: {
        type: Number,
        default: 0
    },
    currency: {
        type: String
    },
    type:{
        type: String,
        enum: TYPE_OF_ACCOUNTS,
        default: TYPE_OF_ACCOUNTS[0]
    },
    color: {
        type: String,
        default: '#009689'
    },
    creditLimit: {
        type: Number,
        default: 0,
    },
    savingGoal: {
        type: Number,
        default: 0,    
    },
    deleted: {
        type: Boolean,
        default: false
    },
    closed: {
        type: Boolean,
        default: false
    },
    excludedFromTotal: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model.Ledger || mongoose.model("Ledger", LedgerSchema);


