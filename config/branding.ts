export type BrandId = 'HARPERS_PLACE' | 'PAULS_ROOFING';

export const CURRENT_BRAND: BrandId = 'PAULS_ROOFING'; // Change this line to switch brands

export const BRAND_CONFIG = {
    HARPERS_PLACE: {
        name: "Harper's Place",
        headerTitle: "Homeowner's",
        headerSubtitle: "HANDBOOK",
        logoLetter: "H",
        logoColor: "bg-orange-600",
        landingComponent: "ShedLanding",
        showRoofingProcess: false,
        showShedBuilder: true
    },
    PAULS_ROOFING: {
        name: "Paul's Roofing",
        headerTitle: "Paul's",
        headerSubtitle: "ROOFING",
        logoLetter: "P",
        logoColor: "bg-blue-600",
        landingComponent: "RoofingLanding",
        showRoofingProcess: true,
        showShedBuilder: false
    }
};
