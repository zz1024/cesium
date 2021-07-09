// this is a placeholder for other material-based shader stages
export default function SolidColorPipelineStage() {}

SolidColorPipelineStage.process = function (
  primitive,
  renderResources,
  frameState
) {
  renderResources.shaderBuilder.addFragmentLines([
    "vec4 solidColor(vec4 color)",
    "{",
    "    return vec4(0.0, 1.0, 0.0, 1.0);",
    "}",
  ]);
};