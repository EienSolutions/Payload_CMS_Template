import { InfoVehicle } from './../../components/InfoVehicle';
import { PropertiesModel } from './../../components/PropertiesModel';
import { GlobalConfig } from "payload/types";
import { CustomYourJAC } from '../../components/CustomYourJAC';
import { ImageGallery } from '../../components/ImageGallery';
import { Recommendations } from '../../components/Recommendations';
import { charSlider } from '../../components/CharSlider';
import { descBanner } from '../../components/descBanner';
import { ShowRoom } from '../../components/ShowRoom';
import { ModelsBulletList } from '../../components/ModelsBulletList';


const JAC4: GlobalConfig = {
	slug: "JAC4",
	fields: [
		// --- Secciones  E-10X---
		descBanner,
		PropertiesModel,
        charSlider,
		InfoVehicle,
		CustomYourJAC,
       ModelsBulletList, //--- Falta un componente ModelsBulletList
        ShowRoom,
		ImageGallery,
		Recommendations
	],
};

export default JAC4;