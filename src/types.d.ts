type Runner = "basic" | "thnk";
declare module "gdexporter" {
  const exporter: (
    projectPath: string,
    outputPath: string
  ) => void;
  export default exporter;
}
