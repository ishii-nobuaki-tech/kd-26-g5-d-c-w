/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  // 埋め込むLooker StudioのURL
  const lookerStudioUrl = "https://lookerstudio.google.com/embed/reporting/XXXXXXX";

  return (
    <div className="w-screen h-screen overflow-hidden bg-white">
      <iframe
        src={lookerStudioUrl}
        className="w-full h-full border-0"
        allowFullScreen
        title="Looker Studio Dashboard"
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  );
}
