import { Field } from "payload/types";

export const charSlider: Field = {
    name: "CharSlider",
    label: "Slider KSP",
    type: "group",
    fields: [
        {
            name: "DataItem",
            type: "array",
            required: true,
            fields: [
                {
                    name: "img",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
                {
                    name: "icon",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
                {
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "text",
                    type: "text",
                    required: true,
                },
            ],
        },
    ],
};