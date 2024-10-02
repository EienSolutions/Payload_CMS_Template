import {Field} from "payload/types";

export const VideoHeader: Field = {
	name: "videoHeader",
	label: "Hero Video",
	type: "group",
	fields: [
		{
			name: "videoDesk",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "videoMobile",
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
