import { Field } from "payload/types";

export const ImageGallery: Field = {
    name: "imageGallery",
    label: "imageGallery",
    type: "group",
    fields: [
        {
            name: "Title",
            type: 'text', // required
            required: true,
        },
        {
            name: "Interior",
            type: "array",
            // required: true,
            fields: [
                {
                    name: "img",
                    type: "upload",
                    relationTo: "media",
                    // required: true,
                },
            ],
        },
        {
            name: "Exterior",
            type: "array",
            // required: true,
            fields: [
                {
                    name: "img",
                    type: "upload",
                    relationTo: "media",
                    // required: true,
                },
            ],
        },



    ],
};
