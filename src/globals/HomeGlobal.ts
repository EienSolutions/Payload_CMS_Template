
import { GlobalConfig } from "payload/types";
import { InfoVehicle } from "../components/InfoVehicle";

const HomeGlobal: GlobalConfig = {
	slug: "home",
	fields: [
		{
			name: "Meta_Information",
			label: "Meta_Information",
			type: "group",
			fields: [
				{
					name: "Meta_Title",
					type: "text",
					required: true,
				},
				{
					name: "Meta_Description",
					type: "textarea",
					required: true,
				},
				{
					name: "Meta_Image",
					type: "upload",
					relationTo: "media",
				},
			],
		},
		// --- Hero Section ---
		{
			name: "Hero",
			label: "Hero",
			type: "group",
			fields: [
				{
					name: "Page_Title",
					type: "text",
					required: true,
				},
				{
					name: "Hero_Image",
					type: "upload",
					relationTo: "media",
				},
				{
					name: "Hero_Text",
					type: "text",
					required: true,
				},
				{
					name: "Hero_Text_Link",
					type: "text",
					required: true,
				},
			],
		},
		// --- Section 2 ---
		{
			name: "Section_2",
			label: "Section 2",
			type: "group",
			fields: [
				{
					name: "Section_Two_Title",
					type: "text",
					required: true,
				},
				{
					name: "Section_Two_Subtitle",
					type: "text",
					required: true,
				},
				{
					name: "Section_Two_Cards",
					type: "array",
					minRows: 4,
					maxRows: 4,
					required: true,
					fields: [
						{
							name: "title",
							type: "text",
							required: true,
						},
						{
							name: "image",
							type: "upload",
							relationTo: "media",
							required: true,
						},
						{
							name: "link",
							type: "richText",
							required: true,
						},
					],
				},
			],
		},
		// --- Section 3 ---
		{
			name: "Section_3",
			label: "Section 3",
			type: "group",
			fields: [
				{
					name: "Section_3_title",
					type: "text",
					required: true,
				},
				{
					name: "Section_3_image_Fondo",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "Section_3_image_Frente",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "Section_3_text_Button_left",
					type: "text",
					required: true,
				},
				{
					name: "Section_3_link_Button_left",
					type: "text",
					required: true,
				},
				{
					name: "Section_3_text_Button_right",
					type: "text",
					required: true,
				},
				{
					name: "Section_3_link_Button_right",
					type: "text",
					required: true,
				},
			],
		},
		// --- Section 4 ---
		{
			name: "Section_4",
			label: "Section 4",
			type: "group",
			fields: [
				{
					name: "Section_4_Title",
					type: "text",
					required: true,
				},
				{
					name: "Section_4_Subtitle",
					type: "text",
					required: true,
				},
				{
					name: "Section_4_text_Image",
					type: "array",
					minRows: 4,
					maxRows: 4,
					required: true,
					fields: [
						{
							name: "title",
							type: "text",
							required: true,
						},
						{
							name: "image",
							type: "upload",
							relationTo: "media",
							required: true,
						},
					],
				},
				{
					name: "Section_4_text_little",
					type: "text",
					required: true,
				},
			],
		},
	],
};

export default HomeGlobal;
