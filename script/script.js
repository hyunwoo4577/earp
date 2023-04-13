//주문영역 상품이미지 view (.작은 이미지 클릭 시 큰 이미지로 변경)

const big = document.querySelector('#order .big img')
const thum = document.querySelectorAll('#order .thum a')
console.log(big, thum)

thum.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()//href 새로고침 막기
        console.log(target)
        console.log(index)
        big.src = `./images/product_0${index+1}.jpg`//이미지 통일 
    })
})
//주문영역 상품 옵션 선택
const brands = document.querySelector ('#order #brands')
const galaxy = document.querySelector ('#order #galaxy')
const iphone = document.querySelector ('#order #iphone')
console.log(brands,galaxy,iphone)
iphone.style.display = 'none'
galaxy.disabled = true //비활성화(초기값) - (false=활성화)

brands.addEventListener('change',()=>{
    if(brands.options[2].selected == true){//아이폰
        brands_dis(iphone, false)
    }
    else if(brands.options[1].selected == true){//갤럭시
        brands_dis(galaxy, false)
    }
    else{//필수옵션안내(위 조건 아이폰,갤럭시가 모두 아닌 경우)
        brands_dis(galaxy,true)
    galaxy.options[0].selected = true
    }
})

function brands_dis(target,boolean){
    iphone.style.display = 'none'
    galaxy.style.display = 'none'
    target.style.display = 'block'
    target.disabled = boolean
}

//기종 선택시 주문영역에 기종명 출력하기~
const order_model = document.querySelector('.order_product .model')
const galaxy_op = document.querySelectorAll('#galaxy option')
const iphone_op = document.querySelectorAll('#iphone option')
console.log(order_model,galaxy_op,iphone_op)//for문은 index가 통일되어 있을 때만 사용가능

//갤럭시 기종 출력
galaxy.addEventListener('change',()=>{
    let galaxy_index = galaxy.selectedIndex
    console.log(galaxy_op[galaxy_index])
    order_model.appendChild(galaxy_op[galaxy_index])//appendChild : 현재대상의 뒤로 추가
})
//아이폰 기종 출력
iphone.addEventListener('change',()=>{
    let iphone_index = iphone.selectedIndex
    console.log(iphone_op[iphone_index])
    order_model.appendChild(iphone_op[iphone_index])//appendChild : 현재대상의 뒤로 추가
})

//수량 올렸을 때 17000 x ?
const num_input = document.querySelector('#order_num')
const total_price = document.querySelector('.order_list em span')
const reset = document.querySelector('#cancel')
let price = 17000
let total
num_input.addEventListener('change',()=>{
    if(num_input.value>0){
    console.log(num_input.value)
    total = price*num_input.value
    console.log(total)
    total_price.innerHTML = total.toLocaleString('ko-kr')
}else{
    window.alert('최소주문수량입니당')
    num_input.value = 1
}
})
reset.addEventListener(
    'click',()=>{
        num_input.value = 1
        total = price*num_input.value
        total_price.innerHTML = total.toLocaleString('ko-kr')
    }
)