import { Field } from "payload/types";

export const InfoVehicle: Field = {
    name: "infoVehicle",
    label: "infoVehicle",
    type: "group",
    fields: [
        {
            name: "isElectric",
            type: 'checkbox', // required
            label: 'Vehículo eléctrico',
            defaultValue: false,
        },
        {
            name: "mainTitle",
            type: "text",
            required: true,
        },
        {
            name: "SectionContent",
            type: "array",
            required: true,
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "img",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
                {
                    name: "text",
                    type: "textarea",
                    required: true,
                },
            ],

        },

    ],
};
