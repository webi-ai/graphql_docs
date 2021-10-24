/**
 * @typedef {Object} Node
 * @property {string} id
 * @property {string} geometry
 * @property {string} osmId
 * @property {number} changeset
 * @property {number} version
 * @property {string} timestamp
 * @property {string} tags
 * @property {string} lat
 * @property {string} lon
 */

/**
 * @typedef {Object} Edge
 * @property {string} id
 * @property {string} len
 * @property {string} v
 * @property {string} u
 * @property {string} geometry
 * @property {string} osm_type
 * @property {string} tags
 * @property {number} version
 * @property {string} timestamp
 * @property {string} osmId
 * @property {string} width
 * @property {string} tunnel
 * @property {string} surface
 * @property {string} segregated
 * @property {string} service
 * @property {string} psv
 * @property {string} overtaking
 * @property {string} oneway
 * @property {string} name
 * @property {string} motor_vehicle
 * @property {string} motorcar
 * @property {string} maxspeed
 * @property {string} lit
 * @property {number} lanes
 * @property {string} int_ref
 * @property {string} highway
 * @property {string} footway
 * @property {string} foot
 * @property {string} cycleway
 * @property {string} bridge
 * @property {string} bicycle
 * @property {string} area
 * @property {string} access
 */

/**
 * @typedef {Object} PointOfInterest
 * @property {string} id
 * @property {string} addr_full
 * @property {string} addr_city
 * @property {string} addr_country
 * @property {string} addr_housenumber
 * @property {string} addr_housename
 * @property {string} addr_postcode
 * @property {string} addr_street
 * @property {string} addr_place
 * @property {string} email
 * @property {string} name
 * @property {string} opening_hours
 * @property {string} operator
 * @property {string} phone
 * @property {string} private_or_public
 * @property {string} url
 * @property {string} website
 * @property {string} building
 * @property {string} amenity
 * @property {string} building_levels
 * @property {string} landuse
 * @property {string} office
 * @property {string} shop
 * @property {string} source
 * @property {string} start_date
 * @property {string} wikipedia
 * @property {string} osmId
 * @property {string} timestamp
 * @property {number} version
 * @property {string} geometry
 * @property {string} tags
 * @property {string} osm_type
 * @property {string} internet_access
 * @property {number} changeset
 * @property {string} craft
 * @property {string} lat
 * @property {string} lon
 * @property {string} atm
 * @property {string} bicycle_parking
 * @property {string} cafe
 * @property {string} childcare
 * @property {string} parking
 * @property {string} social_facility
 * @property {string} books
 * @property {string} butcher
 * @property {string} clothes
 * @property {string} erotic
 * @property {string} religion
 * @property {string} second_hand
 * @property {string} information
 * @property {string} tourism
 * @property {string} bicycle
 * @property {string} coffee
 * @property {string} collector
 * @property {string} dry_cleaning
 * @property {string} fuel
 * @property {string} furniture
 * @property {string} massage
 * @property {string} motorcycle
 * @property {string} music
 * @property {string} organic
 * @property {string} outdoor
 * @property {string} pet
 * @property {string} trade
 * @property {string} wine
 * @property {string} attraction
 * @property {string} museum
 * @property {string} bar
 * @property {string} car_wash
 * @property {string} drinking_water
 * @property {string} leisure
 * @property {string} outdoor_seating
 * @property {string} playground
 * @property {string} caravan
 * @property {string} golf
 * @property {string} swimming_pool
 * @property {string} water
 * @property {string} wholesale
 * @property {string} viewpoint
 * @property {string} zoo
 * @property {string} gambling
 * @property {string} theatre
 * @property {string} fitness_station
 * @property {string} poi_type
 * @property {string} cheese
 * @property {string} tobacco
 * @property {string} post_office
 * @property {string} tattoo
 * @property {string} lottery
 * @property {string} fireplace
 * @property {string} picnic_table
 * @property {string} school
 * @property {string} stationery
 * @property {string} jewelry
 * @property {string} pastry
 * @property {string} ice_cream
 * @property {string} artwork
 * @property {string} alcohol
 * @property {string} sauna
 * @property {string} medical_supply
 * @property {string} restaurant
 * @property {string} social_centre
 * @property {string} park
 * @property {string} biergarten
 * @property {string} lighting
 * @property {string} boat
 * @property {string} seafood
 * @property {string} deli
 * @property {string} mobile_phone
 * @property {string} fast_food
 * @property {string} hairdresser
 * @property {string} shoes
 * @property {string} guest_house
 * @property {string} video
 * @property {string} fountain
 * @property {string} bakery
 * @property {string} bbq
 * @property {string} fitness_centre
 * @property {string} car
 * @property {string} pub
 * @property {string} supermarket
 * @property {string} art
 * @property {string} car_repair
 * @property {string} camp_site
 * @property {string} agrarian
 * @property {string} amusement_arcade
 * @property {string} fishing
 * @property {string} chocolate
 * @property {string} vacant
 * @property {string} library
 * @property {string} cannabis
 * @property {string} spa
 */

/**
 * @typedef {Object} Building
 * @property {string} id
 * @property {string} phone
 * @property {string} addr_city
 * @property {string} addr_country
 * @property {string} addr_full
 * @property {string} addr_housenumber
 * @property {string} addr_housename
 * @property {string} addr_postcode
 * @property {string} addr_street
 * @property {string} addr_place
 * @property {string} email
 * @property {string} name
 * @property {string} opening_hours
 * @property {string} operator
 * @property {string} private_or_public
 * @property {string} url
 * @property {string} website
 * @property {string} building
 * @property {string} amenity
 * @property {string} building_levels
 * @property {string} building_material
 * @property {string} building_min_level
 * @property {string} height
 * @property {string} landuse
 * @property {string} office
 * @property {string} shop
 * @property {string} source
 * @property {string} start_date
 * @property {string} wikipedia
 * @property {string} geometry
 * @property {string} osmId
 * @property {number} changeset
 * @property {number} version
 * @property {string} timestamp
 * @property {string} tags
 * @property {string} osm_type
 * @property {string} internet_access
 * @property {string} craft
 */

/**
 * @typedef {Object} ReadIDInput
 * @property {string} [eq]
 * @property {string} [gt]
 * @property {string} [gte]
 * @property {string} [lt]
 * @property {string} [lte]
 * @property {string} [contains]
 */

/**
 * @typedef {Object} ReadStringInput
 * @property {string} [eq]
 * @property {string} [gt]
 * @property {string} [gte]
 * @property {string} [lt]
 * @property {string} [lte]
 * @property {string} [contains]
 * @property {string} [startsWith]
 * @property {string} [endsWith]
 */

/**
 * @typedef {("ASC"|"DESC")} OrderDirection
 */

/**
 * @typedef {Object} ReadIntInput
 * @property {number} [eq]
 * @property {number} [gt]
 * @property {number} [gte]
 * @property {number} [lt]
 * @property {number} [lte]
 */

/**
 * @typedef {Object} OrderNodeInput
 * @property {OrderDirection} [id]
 * @property {OrderDirection} [geometry]
 * @property {OrderDirection} [osmId]
 * @property {OrderDirection} [changeset]
 * @property {OrderDirection} [version]
 * @property {OrderDirection} [timestamp]
 * @property {OrderDirection} [tags]
 * @property {OrderDirection} [lat]
 * @property {OrderDirection} [lon]
 */

/**
 * @typedef {Object} OrderBuildingInput
 * @property {OrderDirection} [id]
 * @property {OrderDirection} [phone]
 * @property {OrderDirection} [addr_city]
 * @property {OrderDirection} [addr_country]
 * @property {OrderDirection} [addr_full]
 * @property {OrderDirection} [addr_housenumber]
 * @property {OrderDirection} [addr_housename]
 * @property {OrderDirection} [addr_postcode]
 * @property {OrderDirection} [addr_street]
 * @property {OrderDirection} [addr_place]
 * @property {OrderDirection} [email]
 * @property {OrderDirection} [name]
 * @property {OrderDirection} [opening_hours]
 * @property {OrderDirection} [operator]
 * @property {OrderDirection} [private_or_public]
 * @property {OrderDirection} [url]
 * @property {OrderDirection} [website]
 * @property {OrderDirection} [building]
 * @property {OrderDirection} [amenity]
 * @property {OrderDirection} [building_levels]
 * @property {OrderDirection} [building_material]
 * @property {OrderDirection} [building_min_level]
 * @property {OrderDirection} [height]
 * @property {OrderDirection} [landuse]
 * @property {OrderDirection} [office]
 * @property {OrderDirection} [shop]
 * @property {OrderDirection} [source]
 * @property {OrderDirection} [start_date]
 * @property {OrderDirection} [wikipedia]
 * @property {OrderDirection} [osmId]
 * @property {OrderDirection} [timestamp]
 * @property {OrderDirection} [version]
 * @property {OrderDirection} [geometry]
 * @property {OrderDirection} [tags]
 * @property {OrderDirection} [osm_type]
 * @property {OrderDirection} [internet_access]
 * @property {OrderDirection} [changeset]
 * @property {OrderDirection} [craft]
 */

/**
 * @typedef {Object} OrderPointOfInterestInput
 * @property {OrderDirection} [id]
 * @property {OrderDirection} [addr_full]
 * @property {OrderDirection} [addr_city]
 * @property {OrderDirection} [addr_country]
 * @property {OrderDirection} [addr_housenumber]
 * @property {OrderDirection} [addr_housename]
 * @property {OrderDirection} [addr_postcode]
 * @property {OrderDirection} [addr_street]
 * @property {OrderDirection} [addr_place]
 * @property {OrderDirection} [email]
 * @property {OrderDirection} [name]
 * @property {OrderDirection} [opening_hours]
 * @property {OrderDirection} [operator]
 * @property {OrderDirection} [phone]
 * @property {OrderDirection} [private_or_public]
 * @property {OrderDirection} [url]
 * @property {OrderDirection} [website]
 * @property {OrderDirection} [building]
 * @property {OrderDirection} [amenity]
 * @property {OrderDirection} [building_levels]
 * @property {OrderDirection} [landuse]
 * @property {OrderDirection} [office]
 * @property {OrderDirection} [shop]
 * @property {OrderDirection} [source]
 * @property {OrderDirection} [start_date]
 * @property {OrderDirection} [wikipedia]
 * @property {OrderDirection} [osmId]
 * @property {OrderDirection} [timestamp]
 * @property {OrderDirection} [version]
 * @property {OrderDirection} [geometry]
 * @property {OrderDirection} [tags]
 * @property {OrderDirection} [osm_type]
 * @property {OrderDirection} [internet_access]
 * @property {OrderDirection} [changeset]
 * @property {OrderDirection} [craft]
 * @property {OrderDirection} [lat]
 * @property {OrderDirection} [lon]
 * @property {OrderDirection} [atm]
 * @property {OrderDirection} [bicycle_parking]
 * @property {OrderDirection} [cafe]
 * @property {OrderDirection} [childcare]
 * @property {OrderDirection} [parking]
 * @property {OrderDirection} [social_facility]
 * @property {OrderDirection} [books]
 * @property {OrderDirection} [butcher]
 * @property {OrderDirection} [clothes]
 * @property {OrderDirection} [erotic]
 * @property {OrderDirection} [religion]
 * @property {OrderDirection} [second_hand]
 * @property {OrderDirection} [information]
 * @property {OrderDirection} [tourism]
 * @property {OrderDirection} [bicycle]
 * @property {OrderDirection} [coffee]
 * @property {OrderDirection} [collector]
 * @property {OrderDirection} [dry_cleaning]
 * @property {OrderDirection} [fuel]
 * @property {OrderDirection} [furniture]
 * @property {OrderDirection} [massage]
 * @property {OrderDirection} [motorcycle]
 * @property {OrderDirection} [music]
 * @property {OrderDirection} [organic]
 * @property {OrderDirection} [outdoor]
 * @property {OrderDirection} [pet]
 * @property {OrderDirection} [trade]
 * @property {OrderDirection} [wine]
 * @property {OrderDirection} [attraction]
 * @property {OrderDirection} [museum]
 * @property {OrderDirection} [bar]
 * @property {OrderDirection} [car_wash]
 * @property {OrderDirection} [drinking_water]
 * @property {OrderDirection} [leisure]
 * @property {OrderDirection} [outdoor_seating]
 * @property {OrderDirection} [playground]
 * @property {OrderDirection} [caravan]
 * @property {OrderDirection} [golf]
 * @property {OrderDirection} [swimming_pool]
 * @property {OrderDirection} [water]
 * @property {OrderDirection} [wholesale]
 * @property {OrderDirection} [viewpoint]
 * @property {OrderDirection} [zoo]
 * @property {OrderDirection} [gambling]
 * @property {OrderDirection} [theatre]
 * @property {OrderDirection} [fitness_station]
 * @property {OrderDirection} [poi_type]
 * @property {OrderDirection} [cheese]
 * @property {OrderDirection} [tobacco]
 * @property {OrderDirection} [post_office]
 * @property {OrderDirection} [tattoo]
 * @property {OrderDirection} [lottery]
 * @property {OrderDirection} [fireplace]
 * @property {OrderDirection} [picnic_table]
 * @property {OrderDirection} [school]
 * @property {OrderDirection} [stationery]
 * @property {OrderDirection} [jewelry]
 * @property {OrderDirection} [pastry]
 * @property {OrderDirection} [ice_cream]
 * @property {OrderDirection} [artwork]
 * @property {OrderDirection} [alcohol]
 * @property {OrderDirection} [sauna]
 * @property {OrderDirection} [medical_supply]
 * @property {OrderDirection} [restaurant]
 * @property {OrderDirection} [social_centre]
 * @property {OrderDirection} [park]
 * @property {OrderDirection} [biergarten]
 * @property {OrderDirection} [lighting]
 * @property {OrderDirection} [boat]
 * @property {OrderDirection} [seafood]
 * @property {OrderDirection} [deli]
 * @property {OrderDirection} [mobile_phone]
 * @property {OrderDirection} [fast_food]
 * @property {OrderDirection} [hairdresser]
 * @property {OrderDirection} [shoes]
 * @property {OrderDirection} [guest_house]
 * @property {OrderDirection} [video]
 * @property {OrderDirection} [fountain]
 * @property {OrderDirection} [bakery]
 * @property {OrderDirection} [bbq]
 * @property {OrderDirection} [fitness_centre]
 * @property {OrderDirection} [car]
 * @property {OrderDirection} [pub]
 * @property {OrderDirection} [supermarket]
 * @property {OrderDirection} [art]
 * @property {OrderDirection} [car_repair]
 * @property {OrderDirection} [camp_site]
 * @property {OrderDirection} [agrarian]
 * @property {OrderDirection} [amusement_arcade]
 * @property {OrderDirection} [fishing]
 * @property {OrderDirection} [chocolate]
 * @property {OrderDirection} [vacant]
 * @property {OrderDirection} [library]
 * @property {OrderDirection} [cannabis]
 * @property {OrderDirection} [spa]
 */

/**
 * @typedef {Object} OrderEdgeInput
 * @property {OrderDirection} [id]
 * @property {OrderDirection} [len]
 * @property {OrderDirection} [v]
 * @property {OrderDirection} [u]
 * @property {OrderDirection} [geometry]
 * @property {OrderDirection} [osm_type]
 * @property {OrderDirection} [tags]
 * @property {OrderDirection} [version]
 * @property {OrderDirection} [timestamp]
 * @property {OrderDirection} [osmId]
 * @property {OrderDirection} [width]
 * @property {OrderDirection} [tunnel]
 * @property {OrderDirection} [surface]
 * @property {OrderDirection} [segregated]
 * @property {OrderDirection} [service]
 * @property {OrderDirection} [psv]
 * @property {OrderDirection} [overtaking]
 * @property {OrderDirection} [oneway]
 * @property {OrderDirection} [name]
 * @property {OrderDirection} [motor_vehicle]
 * @property {OrderDirection} [motorcar]
 * @property {OrderDirection} [maxspeed]
 * @property {OrderDirection} [lit]
 * @property {OrderDirection} [lanes]
 * @property {OrderDirection} [int_ref]
 * @property {OrderDirection} [highway]
 * @property {OrderDirection} [footway]
 * @property {OrderDirection} [foot]
 * @property {OrderDirection} [cycleway]
 * @property {OrderDirection} [bridge]
 * @property {OrderDirection} [bicycle]
 * @property {OrderDirection} [area]
 * @property {OrderDirection} [access]
 */

/**
 * @typedef {Object} ReadNodeInput
 * @property {ReadIDInput} [id]
 * @property {ReadStringInput} [geometry]
 * @property {ReadStringInput} [osmId]
 * @property {ReadIntInput} [changeset]
 * @property {ReadIntInput} [version]
 * @property {ReadStringInput} [timestamp]
 * @property {ReadStringInput} [tags]
 * @property {ReadStringInput} [lat]
 * @property {ReadStringInput} [lon]
 * @property {Array<ReadNodeInput>} [and]
 * @property {Array<ReadNodeInput>} [or]
 */

/**
 * @typedef {Object} ReadBuildingInput
 * @property {ReadIDInput} [id]
 * @property {ReadStringInput} [phone]
 * @property {ReadStringInput} [addr_city]
 * @property {ReadStringInput} [addr_country]
 * @property {ReadStringInput} [addr_full]
 * @property {ReadStringInput} [addr_housenumber]
 * @property {ReadStringInput} [addr_housename]
 * @property {ReadStringInput} [addr_postcode]
 * @property {ReadStringInput} [addr_street]
 * @property {ReadStringInput} [addr_place]
 * @property {ReadStringInput} [email]
 * @property {ReadStringInput} [name]
 * @property {ReadStringInput} [opening_hours]
 * @property {ReadStringInput} [operator]
 * @property {ReadStringInput} [private_or_public]
 * @property {ReadStringInput} [url]
 * @property {ReadStringInput} [website]
 * @property {ReadStringInput} [building]
 * @property {ReadStringInput} [amenity]
 * @property {ReadStringInput} [building_levels]
 * @property {ReadStringInput} [building_material]
 * @property {ReadStringInput} [building_min_level]
 * @property {ReadStringInput} [height]
 * @property {ReadStringInput} [landuse]
 * @property {ReadStringInput} [office]
 * @property {ReadStringInput} [shop]
 * @property {ReadStringInput} [source]
 * @property {ReadStringInput} [start_date]
 * @property {ReadStringInput} [wikipedia]
 * @property {ReadStringInput} [osmId]
 * @property {ReadStringInput} [timestamp]
 * @property {ReadIntInput} [version]
 * @property {ReadStringInput} [geometry]
 * @property {ReadStringInput} [tags]
 * @property {ReadStringInput} [osm_type]
 * @property {ReadStringInput} [internet_access]
 * @property {ReadStringInput} [changeset]
 * @property {ReadStringInput} [craft]
 * @property {Array<ReadBuildingInput>} [and]
 * @property {Array<ReadBuildingInput>} [or]
 */

/**
 * @typedef {Object} ReadPointOfInterestInput
 * @property {ReadIDInput} [id]
 * @property {ReadStringInput} [addr_full]
 * @property {ReadStringInput} [addr_city]
 * @property {ReadStringInput} [addr_country]
 * @property {ReadStringInput} [addr_housenumber]
 * @property {ReadStringInput} [addr_housename]
 * @property {ReadStringInput} [addr_postcode]
 * @property {ReadStringInput} [addr_street]
 * @property {ReadStringInput} [addr_place]
 * @property {ReadStringInput} [email]
 * @property {ReadStringInput} [name]
 * @property {ReadStringInput} [opening_hours]
 * @property {ReadStringInput} [operator]
 * @property {ReadStringInput} [phone]
 * @property {ReadStringInput} [private_or_public]
 * @property {ReadStringInput} [url]
 * @property {ReadStringInput} [website]
 * @property {ReadStringInput} [building]
 * @property {ReadStringInput} [amenity]
 * @property {ReadStringInput} [building_levels]
 * @property {ReadStringInput} [landuse]
 * @property {ReadStringInput} [office]
 * @property {ReadStringInput} [shop]
 * @property {ReadStringInput} [source]
 * @property {ReadStringInput} [start_date]
 * @property {ReadStringInput} [wikipedia]
 * @property {ReadStringInput} [osmId]
 * @property {ReadStringInput} [timestamp]
 * @property {ReadIntInput} [version]
 * @property {ReadStringInput} [geometry]
 * @property {ReadStringInput} [tags]
 * @property {ReadStringInput} [osm_type]
 * @property {ReadStringInput} [internet_access]
 * @property {ReadIntInput} [changeset]
 * @property {ReadStringInput} [craft]
 * @property {ReadStringInput} [lat]
 * @property {ReadStringInput} [lon]
 * @property {ReadStringInput} [atm]
 * @property {ReadStringInput} [bicycle_parking]
 * @property {ReadStringInput} [cafe]
 * @property {ReadStringInput} [childcare]
 * @property {ReadStringInput} [parking]
 * @property {ReadStringInput} [social_facility]
 * @property {ReadStringInput} [books]
 * @property {ReadStringInput} [butcher]
 * @property {ReadStringInput} [clothes]
 * @property {ReadStringInput} [erotic]
 * @property {ReadStringInput} [religion]
 * @property {ReadStringInput} [second_hand]
 * @property {ReadStringInput} [information]
 * @property {ReadStringInput} [tourism]
 * @property {ReadStringInput} [bicycle]
 * @property {ReadStringInput} [coffee]
 * @property {ReadStringInput} [collector]
 * @property {ReadStringInput} [dry_cleaning]
 * @property {ReadStringInput} [fuel]
 * @property {ReadStringInput} [furniture]
 * @property {ReadStringInput} [massage]
 * @property {ReadStringInput} [motorcycle]
 * @property {ReadStringInput} [music]
 * @property {ReadStringInput} [organic]
 * @property {ReadStringInput} [outdoor]
 * @property {ReadStringInput} [pet]
 * @property {ReadStringInput} [trade]
 * @property {ReadStringInput} [wine]
 * @property {ReadStringInput} [attraction]
 * @property {ReadStringInput} [museum]
 * @property {ReadStringInput} [bar]
 * @property {ReadStringInput} [car_wash]
 * @property {ReadStringInput} [drinking_water]
 * @property {ReadStringInput} [leisure]
 * @property {ReadStringInput} [outdoor_seating]
 * @property {ReadStringInput} [playground]
 * @property {ReadStringInput} [caravan]
 * @property {ReadStringInput} [golf]
 * @property {ReadStringInput} [swimming_pool]
 * @property {ReadStringInput} [water]
 * @property {ReadStringInput} [wholesale]
 * @property {ReadStringInput} [viewpoint]
 * @property {ReadStringInput} [zoo]
 * @property {ReadStringInput} [gambling]
 * @property {ReadStringInput} [theatre]
 * @property {ReadStringInput} [fitness_station]
 * @property {ReadStringInput} [poi_type]
 * @property {ReadStringInput} [cheese]
 * @property {ReadStringInput} [tobacco]
 * @property {ReadStringInput} [post_office]
 * @property {ReadStringInput} [tattoo]
 * @property {ReadStringInput} [lottery]
 * @property {ReadStringInput} [fireplace]
 * @property {ReadStringInput} [picnic_table]
 * @property {ReadStringInput} [school]
 * @property {ReadStringInput} [stationery]
 * @property {ReadStringInput} [jewelry]
 * @property {ReadStringInput} [pastry]
 * @property {ReadStringInput} [ice_cream]
 * @property {ReadStringInput} [artwork]
 * @property {ReadStringInput} [alcohol]
 * @property {ReadStringInput} [sauna]
 * @property {ReadStringInput} [medical_supply]
 * @property {ReadStringInput} [restaurant]
 * @property {ReadStringInput} [social_centre]
 * @property {ReadStringInput} [park]
 * @property {ReadStringInput} [biergarten]
 * @property {ReadStringInput} [lighting]
 * @property {ReadStringInput} [boat]
 * @property {ReadStringInput} [seafood]
 * @property {ReadStringInput} [deli]
 * @property {ReadStringInput} [mobile_phone]
 * @property {ReadStringInput} [fast_food]
 * @property {ReadStringInput} [hairdresser]
 * @property {ReadStringInput} [shoes]
 * @property {ReadStringInput} [guest_house]
 * @property {ReadStringInput} [video]
 * @property {ReadStringInput} [fountain]
 * @property {ReadStringInput} [bakery]
 * @property {ReadStringInput} [bbq]
 * @property {ReadStringInput} [fitness_centre]
 * @property {ReadStringInput} [car]
 * @property {ReadStringInput} [pub]
 * @property {ReadStringInput} [supermarket]
 * @property {ReadStringInput} [art]
 * @property {ReadStringInput} [car_repair]
 * @property {ReadStringInput} [camp_site]
 * @property {ReadStringInput} [agrarian]
 * @property {ReadStringInput} [fishing]
 * @property {ReadStringInput} [chocolate]
 * @property {ReadStringInput} [vacant]
 * @property {ReadStringInput} [library]
 * @property {ReadStringInput} [cannabis]
 * @property {ReadStringInput} [spa]
 * @property {ReadStringInput} [amusement_arcade]
 * @property {Array<ReadPointOfInterestInput>} [and]
 * @property {Array<ReadPointOfInterestInput>} [or]
 */

/**
 * @typedef {Object} ReadEdgeInput
 * @property {ReadIDInput} [id]
 * @property {ReadStringInput} [len]
 * @property {ReadStringInput} [v]
 * @property {ReadStringInput} [u]
 * @property {ReadStringInput} [geometry]
 * @property {ReadStringInput} [osm_type]
 * @property {ReadStringInput} [tags]
 * @property {ReadIntInput} [version]
 * @property {ReadStringInput} [timestamp]
 * @property {ReadStringInput} [osmId]
 * @property {ReadStringInput} [width]
 * @property {ReadStringInput} [tunnel]
 * @property {ReadStringInput} [surface]
 * @property {ReadStringInput} [segregated]
 * @property {ReadStringInput} [service]
 * @property {ReadStringInput} [psv]
 * @property {ReadStringInput} [overtaking]
 * @property {ReadStringInput} [oneway]
 * @property {ReadStringInput} [name]
 * @property {ReadStringInput} [motor_vehicle]
 * @property {ReadStringInput} [motorcar]
 * @property {ReadStringInput} [maxspeed]
 * @property {ReadStringInput} [lit]
 * @property {ReadIntInput} [lanes]
 * @property {ReadStringInput} [int_ref]
 * @property {ReadStringInput} [highway]
 * @property {ReadStringInput} [footway]
 * @property {ReadStringInput} [foot]
 * @property {ReadStringInput} [cycleway]
 * @property {ReadStringInput} [bridge]
 * @property {ReadStringInput} [bicycle]
 * @property {ReadStringInput} [area]
 * @property {ReadStringInput} [access]
 * @property {Array<ReadEdgeInput>} [and]
 * @property {Array<ReadEdgeInput>} [or]
 */

/**
 * @typedef {Object} Query
 * @property {Array<Node>} readNode
 * @property {Array<Edge>} readEdge
 * @property {Array<PointOfInterest>} readPointOfInterest
 * @property {Array<Building>} readBuilding
 */


/**
 * Retrieves POIs by tag and place.
 * @async
 * @method
 * @param {String} tag - query tag
 * @param {String} place - Place to search
 * @param {Int} limit - Limits search results to this number
 * @returns {PointOfInterest} POIs object
 * @throws {NotFoundError} When the user is not found.
 */

async function getPOIs(tag,place,limit) {
    const result = await actor.graphql_query(`
    query{
        readPointOfInterest(
                    search: {${tag}: {contains: "${place}"}}
                          limit: ${limit}
                          offset: 0
                          order: {id: ASC}
        ) {
          id name phone opening_hours private_or_public lat lon
        }
      }
    `, JSON.stringify({}));

    const resultJSON = JSON.parse(result);

    const pois = resultJSON.data.readPointOfInterest;

    return pois;
}

/**
 * Retrieves Nodes by tag and place.
 * @async
 * @method
 * @param {String} tag - query tag
 * @param {String} place - Place to search
 * @param {Int} limit - Limits search results to this number
 * @returns {Node} Node object
 * @throws {NotFoundError} When the user is not found.
 */

async function getNodes(tag,place,limit) {
    const result = await actor.graphql_query(`
    query {
        readNode(
                        search: {${tag}: {contains: "${place}"}}
                        limit: ${limit}
                        offset: 0
                        order: {id: ASC}
      ) { lat lon tags id  }
    }
    
    `, JSON.stringify({}));

    const resultJSON = JSON.parse(result);

    const nodes = resultJSON.data.readNode;

    return nodes;
}


/**
 * Retrieves Buildings by tag and place.
 * @async
 * @method
 * @param {String} tag - query tag
 * @param {String} place - Place to search
 * @param {Int} limit - Limits search results to this number
 * @returns {Node} Building object
 * @throws {NotFoundError} When the user is not found.
 */

async function getBuildings(tag,place,limit) {
    const result = await actor.graphql_query(`
    query{
        readBuilding(
                    search: {${tag}: {contains: "${place}"}}
                          limit: ${limit}
                          offset: 0
                          order: {id: ASC}
        ) {
        id name phone opening_hours private_or_public website
        }
      }
    `, JSON.stringify({}));

    const resultJSON = JSON.parse(result);

    const buildings = resultJSON.data.readBuilding;

    return buildings;
}



