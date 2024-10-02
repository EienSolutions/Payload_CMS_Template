import {Field} from "payload/types";

export const descBanner: Field = {
	name: "descBanner",
	label: "Hero",
	type: "group",
	fields: [
		{
			name: "Banner_Desktop",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "bannerMobile",
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
	],
};
