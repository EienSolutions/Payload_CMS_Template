import {Field} from "payload/types";

export const ElectricCalculator: Field = {
	name: "electricCalculator",
	label: "electricCalculator",
	type: "group",
	fields: [
		{
			name: "min",
			type: "number",
			required: true,
		},
		{
			name: "autonomy",
			type: "number",
			required: true,
		},
		{
			name: "batteryCapacity",
			type: "number",
			required: true,
		},
		{
			name: "kwHomeCost",
			type: "number",
			required: true,
		},
        {
			name: "kwPublicCost",
			type: "number",
			required: true,
		},
        {
            name: "gasCost",
            type: "number",
            required: true,
        },
        {
            name: "KmPerLiter",
            type: "number",
            required: true,
        },
	],
};
