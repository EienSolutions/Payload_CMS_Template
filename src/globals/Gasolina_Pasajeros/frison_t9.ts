import { InfoVehicle } from './../../components/InfoVehicle';
import { PropertiesModel } from './../../components/PropertiesModel';
import { GlobalConfig } from "payload/types";
import { CustomYourJAC } from '../../components/CustomYourJAC';
import { ImageGallery } from '../../components/ImageGallery';
import { Recommendations } from '../../components/Recommendations';
import { charSlider } from '../../components/CharSlider';
import { descBanner } from '../../components/descBanner';
import { ModelsBulletList } from '../../components/ModelsBulletList';


const FRISON_T9: GlobalConfig = {
	slug: "FRISON_T9",
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

export default FRISON_T9;