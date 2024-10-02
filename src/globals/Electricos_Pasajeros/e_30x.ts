import { InfoVehicle } from '../../components/InfoVehicle';
import { PropertiesModel } from '../../components/PropertiesModel';
import { GlobalConfig } from "payload/types";
import { descBanner } from "../../components/descBanner";
import { ElectricCalculator } from '../../components/ElectricCalculator';
import { CustomYourJAC } from '../../components/CustomYourJAC';
import { ImageGallery } from '../../components/ImageGallery';
import { Recommendations } from '../../components/Recommendations';
import { charSlider } from '../../components/CharSlider';
import { ModelsBulletList } from '../../components/ModelsBulletList';

const E_30X: GlobalConfig = {
	slug: "E_30X",
	fields: [
		// --- Secciones  E-10X---
		descBanner,
		PropertiesModel,
		CustomYourJAC,
		charSlider,
		InfoVehicle,
		ElectricCalculator,
		ModelsBulletList,
		ImageGallery,
		Recommendations
	],
};

export default E_30X;
