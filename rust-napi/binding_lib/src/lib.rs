use napi_derive::napi;

#[napi]
fn add (left: u32, right: u32) -> u32 {
    left + right
}

#[napi(constructor)]
struct IData {
    pub value: u32,
}

#[napi]
fn set (mut data: &mut IData, value: u32) {
    data.value = value;
}
