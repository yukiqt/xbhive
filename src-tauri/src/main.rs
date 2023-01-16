//use tauri_utils::config::{Config, WindowConfig};
use tauri::Manager;

#[allow(unused_must_use)]
fn main() {
    let useragent = "XBHive Manager";

    tauri::Builder::default()
        .setup(|app| {
            let main_window = app.get_window("main").unwrap();
            main_window.with_webview(|webview| {
                #[cfg(target_os = "linux")]
                {
                    use webkit2gtk::{WebViewExt, SettingsExt};
                    let webview = webview.inner();
                    let settings = webview.settings().unwrap();
                    settings.set_user_agent(Some(useragent));
                }

                #[cfg(windows)]
                unsafe {
                    use webview2_com::Microsoft::Web::WebView2::Win32::ICoreWebView2Settings2;
                    use windows::core::Interface;
            
                    let settings: ICoreWebView2Settings2 = webview
                        .controller()
                        .CoreWebView2()
                        .unwrap()
                        .Settings()
                        .unwrap()
                        .cast()
                        .unwrap();
            
                    settings
                        .SetUserAgent(useragent.to_string())
                        .unwrap();
                }
            
                // untested
                #[cfg(target_os = "macos")]
                unsafe {
                    use objc::msg_send;
                    use objc_foundation::{NSString, INSString};
                    let () = msg_send![webview.inner(), setCustomUserAgent: NSString::from_str(useragent)];
                }
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
