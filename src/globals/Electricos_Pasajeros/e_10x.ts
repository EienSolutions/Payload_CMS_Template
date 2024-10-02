import { InfoVehicle } from './../../components/InfoVehicle';
import { PropertiesModel } from './../../components/PropertiesModel';
import { GlobalConfig } from "payload/types";
import { descBanner } from "../../components/descBanner";
import { ElectricCalculator } from '../../components/ElectricCalculator';
import { CustomYourJAC } from '../../components/CustomYourJAC';
import { ShowRoom } from '../../components/ShowRoom';
import { ImageGallery } from '../../components/ImageGallery';
import { Recommendations } from '../../components/Recommendations';

const E_10X: GlobalConfig = {
	slug: "E_10X",
	fields: [
		// --- Secciones  E-10X---
		descBanner,
		PropertiesModel,
		InfoVehicle,
		ElectricCalculator,
		CustomYourJAC,
		ShowRoom,
		ImageGallery,
		Recommendations
	],
};

export default E_10X;
