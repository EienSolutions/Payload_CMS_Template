import { Field } from "payload/types";

export const CustomYourJAC: Field = {
    name: "customYourJac",
    label: "customYourJac",
    type: "group",
    fields: [
        {
			name: "nameplate",
			type: "upload",
			relationTo: "media",
			required: true,
		},
        {
            name: "colorVersion",
            type: "array",
            required: true,
            fields: [
                {
                    name: "colorName",
                    type: "text",
                    required: true,
                },
                {
                    name: "vehicleImage",
                    type: "array",
                    required: true,
                    fields: [
                        {
                            name: "img",
                            type: "upload",
                            relationTo: "media",
                            required: true,
                        },
                    ]
                },
                {
                    name: "dot",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
                
               
            ],
        },
        
        

    ],
};
