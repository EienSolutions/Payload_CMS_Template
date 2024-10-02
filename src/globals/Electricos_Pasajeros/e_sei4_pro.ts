import { InfoVehicle } from '../../components/InfoVehicle';
import { PropertiesModel } from '../../components/PropertiesModel';
import { GlobalConfig } from "payload/types";
import { ElectricCalculator } from '../../components/ElectricCalculator';
import { CustomYourJAC } from '../../components/CustomYourJAC';
import { ShowRoom } from '../../components/ShowRoom';
import { ImageGallery } from '../../components/ImageGallery';
import { Recommendations } from '../../components/Recommendations';
import { VideoHeader } from '../../components/VideoHeader';

const E_SEI_4_PRO: GlobalConfig = {
	slug: "E_SEI4_PRO",
	fields: [
		// --- Secciones  E-10X---
		// VideoHeader,
		PropertiesModel,
		InfoVehicle,
		ElectricCalculator,
		CustomYourJAC,
		ShowRoom,
		ImageGallery,
		Recommendations
	],
};

export default E_SEI_4_PRO;