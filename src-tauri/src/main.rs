//use tauri_utils::config::{Config, WindowConfig};
use tauri::Manager;

#[allow(unused_must_use)]
fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let handle = app.app_handle();
            let _window = tauri::WindowBuilder::new(
                &handle,
                "main",
                tauri::WindowUrl::External("https://www.thehiveforums.com/admin_e.php?xbhm/user-manager/".parse().unwrap())
              )
              .initialization_script(include_str!("./preload.js"))
              .build().unwrap();
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
