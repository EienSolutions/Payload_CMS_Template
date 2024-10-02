import {Field} from "payload/types";

export const Recommendations: Field = {
	name: "Recommendations",
	label: "Recommendations",
	type: "group",
	fields: [
		{
            name: "DataItem",
            type: "array",
            required: true,
            fields: [
                {
                    name: "vehicleImg",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
                {
                    name: "nameplate",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
                {
                    name: "price",
                    type: "text",
                    required: true,
                },
                {
                    name: "link",
                    type: "text",
                    required: true,
                },
            ]
		},
		
	],
};
