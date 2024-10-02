import { InfoVehicle } from './../../components/InfoVehicle';
import { PropertiesModel } from './../../components/PropertiesModel';
import { GlobalConfig } from "payload/types";
import { CustomYourJAC } from '../../components/CustomYourJAC';
import { ImageGallery } from '../../components/ImageGallery';
import { Recommendations } from '../../components/Recommendations';
import { charSlider } from '../../components/CharSlider';
import { ShowRoom } from '../../components/ShowRoom';
import { VideoHeader } from '../../components/VideoHeader';
import { ModelsBulletList } from '../../components/ModelsBulletList';
import { descBanner } from '../../components/descBanner';


const JAC_6: GlobalConfig = {
	slug: "SEI_6_PRO",
	fields: [
		// --- Secciones  E-10X---
		// VideoHeader,
		descBanner,
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

export default JAC_6;