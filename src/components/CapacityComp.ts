import { Field } from "payload/types";

export const CapacityComp: Field = {
    name: "capacityComp",
    label: "capacityComp",
    type: "group",
    fields: [
        {
            name: "mainTitle",
            type: 'text', 
            required: true,
        },
        {
            name: "img",
            type: "array",
            required: true,
            fields: [
                {
                    name: "img",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
            ],
        },
        {
            name: "Details",
            type: "array",
            required: true,
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "value",
                    type: "text",
                    required: true,
                },
            ],

        },

    ],
};
