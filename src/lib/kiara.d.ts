/**
 * Short description of the item
 */
export type Description = string;

/**
 * Detailed documentation of the item in markdown format
 */
export type Doc = string | null;

/**
 * Documentation about an item
 */
export interface Documentation {
	description?: Description;
	doc?: Doc;
}

export interface InputFields {
	[k: string]: FieldInfo;
}
export interface FieldInfo {
	field_name: string;
	/**
	 * The schema of the field.
	 */
	field_schema: ValueSchema;
	/**
	 * Information about the data type instance of the associated value.
	 */
	data_type_info: DataTypeInfo;
	value_required: boolean;
}

export interface DataTypeInfo {
	data_type_name: string;
	data_type_config?: Record<string, unknown>;
	/**
	 * Characteristics of this data type.
	 */
	characteristics: DataTypeCharacteristics;
	/**
	 * The python class that is associated with this model.
	 */
	data_type_class: PythonClass;
}

export interface ValueSchema {
	type: string;
	type_config?: Record<string, unknown>;
	default?: string;
	optional?: boolean;
	is_constant?: boolean;
	doc?: Documentation;
}

export interface DataTypeCharacteristics {
	is_scalar?: boolean;
	is_json_serializable?: boolean;
}

export interface PythonClass {
	python_class_name: string;
	python_module_name: string;
	full_name: string;
}

export interface ConfigurationOptions {
	name: string;
	doc: Documentation;
	type: string;
	required: boolean;
	default: string | null;
}

export interface ModuleConfigValues {
	[k: string]: ValueTypeAndDescription;
}
export interface ValueTypeAndDescription {
	description: string;
	type: string;
	value_default?: string | null;
	required: boolean;
}

export interface Author {
	name: string;
	email?: string | null;
}

export interface References {
	[k: string]: Link;
}

export interface Context {
	references?: References;
	tags?: string[];
	labels?: Labels;
}

export interface Link {
	url: string;
	desc?: string | null;
}

export interface Labels {
	[k: string]: string;
}
