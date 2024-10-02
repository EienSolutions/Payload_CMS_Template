import {CollectionConfig} from "payload/types";

export const Media: CollectionConfig = {
	slug: "media",
	upload: {
		adminThumbnail: "thumbnail",
		mimeTypes: ["image/*"],
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text",
		},
		{
			name: "description",
			type: "textarea",
		},
		{
			name: "alt",
			type: "text",
		},
	],
};

export default Media;
