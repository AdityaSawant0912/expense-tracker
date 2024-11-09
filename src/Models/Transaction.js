import mongoose from "mongoose";
import { DIRECTIONS, TRANSACTION_TYPES } from "@/lib/constants";
let Schema = mongoose.Schema

const TransactionSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    typeOfTransaction: {
        type: String,
        enum: Object.values(TRANSACTION_TYPES)
    },
    // For New Transaction
    ledgerId: {
        type: Schema.Types.ObjectId,
        ref: 'Ledger'
    },
    direction: {
        type: String,
        enum: Object.values(DIRECTIONS)
    },
    amount:{
        type: Number
    },
    datetime:{
        type: Schema.Types.Date,
        default: () => Date.now() + 7*24*60*60*1000
    },
    otherParty: {
        type: String,
        maxlength: [20, "'s name cannot be more than 20 characters."]
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tags'
    }],
    notes: {
        type: String
    },
    paymentMethod: {
        type: String
    },
    // For New Transfer
    fromLedger: {
        type: Schema.Types.ObjectId,
        ref: 'Ledger'
    },
    toLedger: {
        type: Schema.Types.ObjectId,
        ref: 'Ledger'
    },
    // For New Split
    splitParts: [{
        type: Schema.Types.ObjectId,
        ref: 'SplitParts'
    }],
    
}, { timestamps: true })

export default mongoose.model.Transaction || mongoose.model("Transaction", TransactionSchema);