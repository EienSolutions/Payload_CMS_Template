import path from "path";
import { buildConfig } from "payload/config";
// import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";

import Users from "./collections/Users";
import Media from "./collections/Media";
import HomeGlobal from "./globals/HomeGlobal";

// Vehículos Eléctricos Pasajeros
import E_10X from "./globals/Electricos_Pasajeros/e_10x";
import E_30X from "./globals/Electricos_Pasajeros/e_30x";
import E_J7 from "./globals/Electricos_Pasajeros/e_j7";
import E_SEI_4_PRO from "./globals/Electricos_Pasajeros/e_sei4_pro";

// Vehículos Gasolina Pasajeros
import J7 from "./globals/Gasolina_Pasajeros/j7";
import JAC_2 from "./globals/Gasolina_Pasajeros/jac2";
import JAC_4 from "./globals/Gasolina_Pasajeros/jac4";
import JAC_6 from "./globals/Gasolina_Pasajeros/sei_6_pro";
import SEI_7_PRO from "./globals/Gasolina_Pasajeros/sei_7_pro";
import FRISON_T6_FLEX from "./globals/Gasolina_Pasajeros/frison_t6_flex";
import FRISON_T8 from "./globals/Gasolina_Pasajeros/frison_t8";
import FRISON_T8_4X4 from "./globals/Gasolina_Pasajeros/frison_t8_4x4";
import FRISON_T9 from "./globals/Gasolina_Pasajeros/frison_t9";

// Vehículos Comerciales Eléctricos
import E_10X_CARGO from "./globals/Vehiculos_Comerciales/Electricos/e_10x_cargo";
import E_SUNRAY_10M from "./globals/Vehiculos_Comerciales/Electricos/e_sunray_10m";
import E_SUNRAY_12M from "./globals/Vehiculos_Comerciales/Electricos/e_sunray_12m";
import E_SUNRAY_CITY from "./globals/Vehiculos_Comerciales/Electricos/e_sunray_city";
import E_X350 from "./globals/Vehiculos_Comerciales/Electricos/e_x350";
import E_X450 from "./globals/Vehiculos_Comerciales/Electricos/e_x450";

// Vehículos Comerciales Gasolina
import SUNRAY_CARGO from "./globals/Vehiculos_Comerciales/Gasolina/sunray_cargo";
import SUNRAY_PASAJEROS from "./globals/Vehiculos_Comerciales/Gasolina/sunray_pasajeros";
import SUNRAY_CHASIS from "./globals/Vehiculos_Comerciales/Gasolina/sunray_chasis";
import X200 from "./globals/Vehiculos_Comerciales/Gasolina/x200";
import X350 from "./globals/Vehiculos_Comerciales/Gasolina/x350";
import K7 from "./globals/Vehiculos_Comerciales/Gasolina/k7";
import X12K from "./globals/Vehiculos_Comerciales/Gasolina/x12k";

const storageAdapter = s3Adapter({
	config: {
		endpoint: process.env.S3_ENDPOINT,
		region: process.env.S3_BUCKET_REGION,
		credentials: {
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		},
	},
	bucket: process.env.S3_BUCKET_NAME,
});

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: slateEditor({}),
	collections: [Users, Media],
	globals: [
		HomeGlobal,
		// Vehículos Eléctricos Pasajeros
		E_10X,
		E_30X,
		E_J7,
		E_SEI_4_PRO,
		// Vehículos Gasolina Pasajeros
		J7,
		JAC_2,
		JAC_4,
		JAC_6,
		SEI_7_PRO,
		FRISON_T6_FLEX,
		FRISON_T8,
		FRISON_T8_4X4,
		FRISON_T9,
		// Vehículos Comerciales Eléctricos
		E_10X_CARGO,
		E_SUNRAY_10M,
		E_SUNRAY_12M,
		E_SUNRAY_CITY,
		E_X350,
		E_X450,
		// Vehículos Comerciales Gasolina
		SUNRAY_CARGO,
		SUNRAY_PASAJEROS,
		SUNRAY_CHASIS,
		X200,
		X350,
		X12K,
		K7,
	],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	plugins: [
		cloudStorage({
			collections: {
				media: {
					adapter: storageAdapter,
					generateFileURL: ({ collection, filename }) => {
						return `https://cms-jac.inbest.biz/${collection.slug}/${filename}`
					},
				},
			},
		}),
	],

	cors: "*", // Allow all origins
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
		connectOptions: {
			useFacet: false,
		},
	}),
});
