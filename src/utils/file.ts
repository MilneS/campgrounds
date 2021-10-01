interface File {
  lastModified: number;
  lastModifiedDate?: any;
  dataKey ?: string;
  name: string;
  size: number;
  type: string;
  arrayBuffer: any;
  slice: any;
  stream: any;
  text: any;
}

export default File;
