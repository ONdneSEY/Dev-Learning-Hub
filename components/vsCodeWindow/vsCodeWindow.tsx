import "./vsCodeWindow.scss";
interface VsCodeWindowProps {
  text: string;
}

export const VsCodeWindow = ({ text }: VsCodeWindowProps) => {
  return (
    <div className="vscode-window">
      <div className="vscode-header">
        <div className="window-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
      </div>
      <div className="vscode-body">
        <pre>
          <p>{text}</p>
        </pre>
      </div>
    </div>
  );
};
