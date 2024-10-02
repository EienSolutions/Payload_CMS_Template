import { InfoVehicle } from './../../components/InfoVehicle';
import { PropertiesModel } from './../../components/PropertiesModel';
import { GlobalConfig } from "payload/types";
import { CustomYourJAC } from '../../components/CustomYourJAC';
import { ImageGallery } from '../../components/ImageGallery';
import { Recommendations } from '../../components/Recommendations';
import { descBanner } from '../../components/descBanner';
import { charSlider } from '../../components/CharSlider';
import { ModelsBulletList } from '../../components/ModelsBulletList';


const FRISON_T6_FLEX: GlobalConfig = {
	slug: "FRISON_T6_FLEX",
	fields: [
		// --- Secciones  E-10X---
		descBanner,
		PropertiesModel,
        charSlider,
		InfoVehicle,
		CustomYourJAC,
        ModelsBulletList,//--- Falta un componente ModelsBulletList
		ImageGallery,
		Recommendations
	],
};

export default FRISON_T6_FLEX;