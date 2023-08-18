#[no_mangle]
pub extern "C" fn add (left: u32, right: u32) -> u32 {
    left + right
}

#[repr(C)]
pub struct IData {
    value: u32,
}

#[no_mangle]
pub extern "C" fn set (mut d: &mut IData, value: u32) {
    d.value = value;
}
