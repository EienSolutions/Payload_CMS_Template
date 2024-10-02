import {Field} from "payload/types";

export const ShowRoom: Field = {
	name: "showRoom",
	label: "showRoom",
	type: "group",
	fields: [
		{
			name: "src",
			type: "text",
			required: true,
		},
		
	],
};
