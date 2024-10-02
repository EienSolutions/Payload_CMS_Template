import { InfoVehicle } from './../../components/InfoVehicle';
import { PropertiesModel } from './../../components/PropertiesModel';
import { GlobalConfig } from "payload/types";
import { CustomYourJAC } from '../../components/CustomYourJAC';
import { ImageGallery } from '../../components/ImageGallery';
import { Recommendations } from '../../components/Recommendations';
import { charSlider } from '../../components/CharSlider';
import { VideoHeader } from '../../components/VideoHeader';
import { ShowRoom } from '../../components/ShowRoom';
import { ModelsBulletList } from '../../components/ModelsBulletList';


const FRISON_T8_4X4: GlobalConfig = {
	slug: "FRISON_T8_4X4",
	fields: [
		// --- Secciones  E-10X---
		// VideoHeader,
		PropertiesModel,
        charSlider,
		InfoVehicle,
		CustomYourJAC,
        ModelsBulletList,//--- Falta un componente ModelsBulletList
        ShowRoom,
		ImageGallery,
		Recommendations
	],
};

export default FRISON_T8_4X4;