import { Field } from "payload/types";

export const ModelsBulletList: Field = {
    name: "modelsBulletList",
    label: "modelsBulletList",
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
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "subtitle",
                    type: "text",
                    // required: true,
                },
                {
                    name: "price",
                    type: "text",
                    required: true,
                },
                {
                    name: "BulletList",
                    type: "array",
                    required: true,
                    fields: [
                        {
                            name: "text",
                            type: "text",
                            required: true,
                        },
                    ],
                },

            ]
        },

    ],
};
