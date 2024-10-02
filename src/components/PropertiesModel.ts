import {Field} from "payload/types";

export const PropertiesModel: Field = {
	name: "propertiesModel",
	label: "KSP Destacables",
	type: "group",
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "text1",
			type: "text",
			required: true,
		},
		{
			name: "text2",
			type: "text",
			required: true,
		},
		{
			name: "text3",
			type: "text",
			required: true,
		},
	],
};
