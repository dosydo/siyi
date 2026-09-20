'use client';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowLeft, MapPin, MoveUpRight, Search, CalendarDays, UsersRound, Wallet, Check, ChevronRight, CircleCheck, Clock3, Store, LayoutGrid, Heart, ListChecks, Phone } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CooperationRules, cooperationCopy } from './cooperation-rules';

const merchantPhone = '13353043351';
const merchantPhoneHref = `tel:${merchantPhone}`;
const assetBase = import.meta.env.BASE_URL;

const benefits = [
 {icon:Search,title:'多一个被顾客找到的入口',text:'顾客按附近、时间和运动类型找课时，可以看到你的门店、环境、老师和课程。'},
 {icon:CalendarDays,title:'让现有课程的余位有机会成交',text:'将课程的可约席位开放到平台，让想按次运动的人更容易走进你的门店。'},
 {icon:UsersRound,title:'把首次到店，延伸为再次预约',text:'顾客喜欢你的课程，可以收藏场馆、查看课表，再次通过平台预约。'},
 {icon:Wallet,title:'预约与账目，放在一起看',text:'通过商户端管理课表、查看预约、签到核销和收益明细，减少信息来回核对。'}
];
const flows = {
 customer: [
  {title:'找到附近的好课程',text:'按距离、日期、时间和运动类型选择，先认识场馆，再决定在哪里运动。',focus:'商户得到什么：门店与课表进入顾客的选择范围。'},
  {title:'看清课程，再决定预约',text:'展示老师、时间、价格与可约名额；顾客下单前可以了解课程与取消规则。',focus:'商户得到什么：让有明确时间和课程需求的人主动选择你。'},
  {title:'按次付费，完成预约',text:'顾客在用户端购买单次课程，查看预约详情、到店地址与订单状态。',focus:'商户得到什么：多一条承接单次课程预约的渠道。'},
  {title:'上完这一节，还能约下一节',text:'核销后查看完成记录；喜欢这家场馆，可以收藏并继续查看后续课程。',focus:'商户得到什么：从一次到店，积累后续预约的机会。'}
 ],
 merchant: [
  {title:'查看每周课表',text:'在商户端集中查看本馆课程、时间和预约人数，管理团课与小班课。',focus:'日常操作：打开商户端，先看今天和本周的课程安排。'},
  {title:'维护课程与开放席位',text:'设置课程、老师、日期、价格、总名额及最低开课人数，发布可预约课表。',focus:'日常操作：根据门店的实际接待能力开放课程。'},
  {title:'查看预约，到店后核销',text:'核对本馆订单的支付及预约状态，在顾客到店后完成签到核销。',focus:'日常操作：区分有效预约、取消退款与已完成记录。'},
  {title:'查看收益与结算记录',text:'分开查看课程收入、佣金、支付手续费、待结算款项和提现记录。',focus:'日常操作：以最终结算规则和实际订单明细核对账目。'}
 ]
};
const faqs = [
 ['平台现在可以正式使用了吗？','目前已有测试版，尚未正式上线。此页展示商户合作初稿和按开发需求绘制的操作示意；实际功能及开通城市，以正式上线后的公布信息为准。'],
 ['500元入驻费怎样申请退费？',cooperationCopy.refund + cooperationCopy.application],
 ['顾客以后再来约课，还要收佣金吗？',cooperationCopy.commission],
 ['订单退款后，佣金怎样处理？',cooperationCopy.orderRefund],
 ['商户什么时候可以结算？',cooperationCopy.settlement],
 ['微信支付手续费和佣金是一起的吗？','这是两项费用。本方案的平台订单佣金为10%，微信支付手续费由商户另外承担，实际支付费率以最终接入和签约规则为准。页面算例将两项分开显示。'],
 ['第二年怎么收费，可以不续留吗？',cooperationCopy.renewal],
 ['已有约课系统，需要重新做一遍吗？','开发需求包含智火系统的数据接口对接，但取决于接口权限、支持范围和联调结果。是否支持你的现有系统，需要逐馆确认，不能据此承诺已经互通。']
];

function PhoneDemo({kind,step,next}:{kind:'customer'|'merchant';step:number;next:()=>void}) {
 const customer=kind==='customer';
 return <div className="phone" aria-label={customer?'用户端操作示意':'商户端操作示意'}>
  <div className="phone-status"><span>9:41</span><span>••• ▰</span></div>
  <div className="phone-title"><span>思翊{customer?'':' · 商户'}</span><span className="phone-dots">••• ◉</span></div>
  <div className="phone-page">
   {customer && step===0 && <><div className="mock-location"><MapPin size={15}/> 佛山 <span>示例位置</span></div><h3>今天，想在哪里运动？</h3><div className="mock-search"><Search size={16}/> 搜索场馆、课程</div><div className="mock-chips"><span className="selected">全部</span><span>瑜伽</span><span>普拉提</span><span>健身</span></div><div className="mock-photo"><img src={`${assetBase}studio.webp`} alt="场馆示例" width="1536" height="1024"/><span>发现身边的好课程</span></div><div className="mock-course"><span className="mock-tag">团课 · 有余位</span><h4>舒展瑜伽</h4><p>示例运动馆 · 19:00–20:00</p><div><strong>¥30 <small>/次</small></strong><Button className="phone-button" onClick={next}>查看示意 <ChevronRight size={14}/></Button></div></div><p className="phone-note">所有课程、价格和门店均为示例</p></>}
   {customer && step===1 && <><div className="mock-photo detail"><img src={`${assetBase}studio.webp`} alt="课程所在场馆的场景示意" width="1536" height="1024"/></div><span className="mock-tag">团课 · 瑜伽</span><h3>舒展瑜伽</h3><p className="mock-muted">示例运动馆</p><div className="mock-specs"><p><Clock3 size={15}/> 19:00–20:00 · 60分钟</p><p><UsersRound size={15}/> 示例老师 · 剩余3席</p><p><MapPin size={15}/> 佛山 · 示例场馆地址</p></div><div className="mock-rule"><strong>预约前，请先了解</strong><p>取消、退款及最低开课人数，以最终课程页面公布的规则为准。</p></div><div className="mock-bottom"><strong>¥30 <small>/次</small></strong><Button className="phone-button" onClick={next}>查看预约示意</Button></div></>}
   {customer && step===2 && <><div className="mock-success"><CircleCheck size={36}/><h3>预约成功示意</h3><p>不产生真实订单或付款</p></div><div className="mock-receipt"><h4>舒展瑜伽</h4><p>示例运动馆</p><dl><div><dt>课程时间</dt><dd>19:00–20:00</dd></div><div><dt>支付金额</dt><dd>¥30.00（示例）</dd></div><div><dt>预约状态</dt><dd>待上课</dd></div></dl></div><div className="mock-rule"><strong>到店前查看预约详情</strong><p>确认场馆位置、课程时间和预约规则。</p></div><Button className="phone-button wide" onClick={next}>查看上课后的记录</Button></>}
   {customer && step===3 && <><h3>我的预约</h3><div className="mock-chips"><span>待上课</span><span className="selected">已完成</span><span>已取消</span></div><div className="mock-receipt"><span className="mock-tag">已核销 · 示例</span><h4>舒展瑜伽</h4><p>示例运动馆 · 19:00–20:00</p><div className="mock-check-line"><Check size={17}/> 课程已完成</div></div><div className="mock-rule"><Heart size={20}/><strong>喜欢这家馆？</strong><p>收藏场馆，下次继续查看好课程。</p></div><Button className="phone-button wide" onClick={next}>再看一次找课流程</Button></>}
   {!customer && step===0 && <><div className="mock-location"><Store size={15}/> 示例运动馆 <span>商户端</span></div><h3>本周课表</h3><div className="mock-week">{['一','二','三','四','五','六','日'].map((d,i)=><span className={i===1?'selected':''} key={d}>{d}<b>{7+i}</b></span>)}</div><div className="mock-course"><span className="mock-tag">团课</span><h4>舒展瑜伽</h4><p>19:00–20:00 · 示例老师</p><div><span>已约 7 / 10 人</span><strong>¥30</strong></div></div><div className="mock-course"><span className="mock-tag">小班</span><h4>核心普拉提</h4><p>20:15–21:15 · 示例老师</p><div><span>已约 3 / 4 人</span><strong>¥80</strong></div></div><Button className="phone-button wide" onClick={next}>查看课程编辑示意</Button></>}
   {!customer && step===1 && <><h3>编辑课程示意</h3><p className="phone-note">下方为填写样例</p><div className="mock-fields">{[['课程名称','舒展瑜伽'],['授课老师','示例老师'],['课程时间','19:00–20:00'],['课程价格','30元 / 次'],['总席位','10人'],['最低开课人数','由商户设置'],['预约截止时间','由商户设置']].map(([k,v])=><div key={k}><span>{k}</span><strong>{v}</strong></div>)}</div><Button className="phone-button wide" onClick={next}>查看预约与核销示意</Button></>}
   {!customer && step===2 && <><h3>预约与核销</h3><div className="mock-rule"><strong>舒展瑜伽</strong><p>19:00–20:00 · 预约信息示例</p></div>{['A','B','C'].map((x,i)=><div className="mock-person" key={x}><span className="mock-avatar">{x}</span><div><strong>示例学员{x}</strong><p>已付款 · ¥30.00</p></div><span className="mock-tag">{i===2?'待核销':'已核销'}</span></div>)}<p className="phone-note">实际使用时，核对有效订单后完成核销。</p><Button className="phone-button wide" onClick={next}>查看收益明细示意</Button></>}
   {!customer && step===3 && <><h3>收益明细示意</h3><div className="mock-money"><p>扣支付手续费前商户分得</p><strong>¥81.00</strong><span>3笔 × 30元 · 佣金按10%举例</span></div><div className="mock-fields">{[['示例订单收入','¥90.00'],['平台佣金','− ¥9.00'],['微信支付手续费','商户承担'],['待结算 / 已结算','按实际订单展示']].map(([k,v])=><div key={k}><span>{k}</span><strong>{v}</strong></div>)}</div><p className="phone-note">未计优惠券、退款及其他调整，不代表实际到账或利润。当前方案按周结算，具体到账时间待核实。</p><Button className="phone-button wide" onClick={next}>再看一次商户流程</Button></>}
  </div>
  <div className="phone-nav"><span><LayoutGrid size={18}/>{customer?'首页':'工作台'}</span><span className="selected"><CalendarDays size={18}/>{customer?'约课':'课表'}</span><span><UsersRound size={18}/>{customer?'我的':'门店'}</span></div>
  <div className="phone-home"/>
 </div>;
}
function Demo() {
 const [kind,setKind]=useState<'customer'|'merchant'>('customer');
 const [step,setStep]=useState(0);
 const next=()=>setStep(s=>(s+1)%4);
 return <Tabs value={kind} onValueChange={v=>{setKind(v as 'customer'|'merchant');setStep(0)}} className="demo-tabs">
  <TabsList className="flow-tabs" aria-label="选择要了解的小程序"><TabsTrigger value="customer">用户端 · 怎样约课</TabsTrigger><TabsTrigger value="merchant">商户端 · 怎样管理</TabsTrigger></TabsList>
  {(['customer','merchant'] as const).map(k=><TabsContent value={k} key={k}><div className="demo-layout">
   <div className="demo-explainer"><p className="demo-label">从{kind==='customer'?'顾客':'门店'}的第一步开始</p><div className="demo-steps">{flows[k].map((f,i)=><Button variant="ghost" className={'demo-step '+(step===i?'active':'')} key={f.title} onClick={()=>setStep(i)} aria-pressed={step===i}><span className="step-no">0{i+1}</span><span><strong>{f.title}</strong>{step===i&&<span className="step-description">{f.text}</span>}</span><ArrowUpRight size={18}/></Button>)}</div><p className="demo-focus">{flows[k][step].focus}</p><p className="muted-note">操作页面按开发需求重新绘制，并非测试版截图；当前为流程示意，正式功能以上线版本为准。</p></div>
   <div className="phone-stage"><span className="demo-badge">可切换的页面示意</span><PhoneDemo kind={k} step={step} next={next}/><div className="demo-pagination"><Button variant="ghost" aria-label="上一张操作示意" onClick={()=>setStep(s=>(s+3)%4)}><ArrowLeft size={18}/></Button><span aria-live="polite">{step+1} / 4</span><Button variant="ghost" aria-label="下一张操作示意" onClick={next}><ArrowRight size={18}/></Button></div></div>
  </div></TabsContent>)}
 </Tabs>;
}

export default function Home() { return <>
<a className="skip-link" href="#top">跳转到主要内容</a>
<div className="preview-notice">商户合作方案初稿 <span>·</span> 小程序测试中，尚未正式上线</div>
<header className="site-header"><a className="brand" href="#top" aria-label="思翊首页"><img className="brand-logo" src={`${assetBase}brand-logo.png`} alt="" width="1254" height="1254"/>思翊<span>身心平衡<br/>商户合作</span></a><nav aria-label="主导航"><a href="#value">商户价值</a><a href="#cooperation">合作收费</a><a href="#demo">小程序演示</a><a href="#roadmap">区域规划</a></nav><a className="header-action" href="#join">了解入驻 <ArrowUpRight size={17}/></a></header>
<main id="top">
<section className="hero wrap">
<div className="hero-copy"><p className="eyebrow"><span className="live-dot"/> 从佛山、广州出发</p><h1>让你的好课程，<br/>被更多人<span className="green-word">看见。</span></h1><p className="hero-desc">思翊连接想运动的人与身边的好场馆。<br/>让顾客按次约课，让门店的空余席位<br className="desktop-br"/>多一个被预约的机会。</p><div className="hero-actions"><a className="button dark" href="#cooperation">了解商户合作 <ArrowUpRight size={19}/></a><a className="text-link" href="#demo">看看怎么用 <ArrowRight size={17}/></a></div><p className="hero-meta">瑜伽 · 普拉提 · 健身 · 更多运动场馆</p></div>
<div className="hero-visual"><img src={`${assetBase}studio.webp`} width="1536" height="1024" alt="明亮普拉提工作室的场景示意"/><div className="image-caption"><MapPin size={14}/> 场馆场景示意 · AI生成</div><div className="hero-statement"><span>好课程，值得被找到。</span><MoveUpRight size={32}/><p>让每一次附近搜索<br/>都有认识你门店的机会</p></div></div>
</section>
<section className="intro-strip" aria-labelledby="platform-title"><div className="wrap"><div className="platform-intro"><p className="eyebrow">关于思翊 · 用户 × 商户 × 平台</p><h2 id="platform-title">让运动，融入你的生活节奏。</h2><p>思翊身心平衡，是一个连接运动用户与本地运动场馆的平台。我们为希望灵活安排锻炼的人而出发，让用户根据所在位置、空闲时间和运动偏好，找到合适的瑜伽馆、普拉提馆与健身场馆，按次预约适合自己的课程。</p><p>对商户，思翊提供展示场馆与课程、承接预约和管理课表的渠道，让可约席位有机会被更多人看见。思翊希望把用户的运动需求、场馆的课程服务与平台的连接能力结合起来，让每一次运动选择更方便，让每一家好场馆更容易被找到。</p></div><div className="intro-grid"><div><span>用户 · 灵活安排运动</span><h2>时间合适，课程也合适</h2><p>按位置、时间与运动类型找课，按次预约，让锻炼跟上自己的生活节奏。</p></div><div><span>商户 · 展示课程与服务</span><h2>让好课程进入更多人的选择</h2><p>展示门店、老师与课表，开放可约席位，承接预约并管理到店核销。</p></div><div><span>平台 · 连接需求与服务</span><h2>把找课、预约与管理连接起来</h2><p>提供信息展示、预约交易与经营管理支持，帮助用户和场馆更顺畅地连接。</p></div></div></div></section>

<section id="value" className="wrap section">
<div className="section-heading"><div><p className="eyebrow">01 / 商户价值</p><h2 className="section-title">你负责好课程，<br/>思翊帮顾客找到你。</h2></div><p className="section-lead">让现有课程的余位进入更多人的选择，也让第一次到店，有机会变成下一次预约。</p></div>
<div className="benefits">{benefits.map((b,i)=><article key={b.title}><b.icon size={26} strokeWidth={1.5}/><span className="benefit-no">0{i+1}</span><h3>{b.title}</h3><p>{b.text}</p></article>)}</div>
<div className="visibility-panel"><div><p className="eyebrow">为什么值得早点了解</p><h2>顾客在平台找课时，<br/>你的场馆，<br/><span>在他的选择里吗？</span></h2><p>如果附近的场馆先入驻，它们就可能先被平台用户看到。一次搜索、一次到店、一次再次预约，接触顾客的机会可能随时间积累。</p><p className="visibility-note">这是情景说明，不表示附近场馆已经入驻，也不承诺半年内的客流或转化差距。</p></div>
<div className="visibility-path"><div className="path-caption">同一位顾客，寻找附近的课程</div><div className="path-option positive"><span><Check size={18}/> 已入驻平台</span><strong>有机会进入选择</strong><p>看到门店 → 了解课程 → 预约到店 → 再次选择</p></div><div className="path-option neutral"><span>尚未入驻平台</span><strong>这次平台搜索里，没有你的门店</strong><p>顾客仍可通过其他渠道认识你，但这一次平台内的展示机会暂未参与。</p></div><div className="path-bottom"><Clock3 size={18}/><p>更早被看见，就多一段时间<br/>积累与新顾客的连接。</p></div></div></div>
</section>

<section id="cooperation" className="pricing-section section"><div className="wrap">
<div className="section-heading"><div><p className="eyebrow">02 / 合作收费</p><h2 className="section-title">先把合作规则，<br/>清清楚楚摆出来。</h2></div><p className="section-lead">入驻费、订单佣金、支付手续费分别列明。以下为当前合作方案初稿，具体执行条款以双方确认的协议为准。</p></div>
<div className="price-cards"><article className="price-card"><div className="price-label">首次入驻</div><p className="price-number"><small>¥</small>500</p><h3>入驻费</h3><p>包含首年基础入驻服务，不另收首年年费。正式开通后半年内可申请体验退费。</p><a href="#refund" className="text-link">了解退费说明 <ArrowRight size={16}/></a></article><article className="price-card featured"><div className="price-label">平台课程订单 <span>初稿方案</span></div><p className="price-number">10<small>%</small></p><h3>订单佣金</h3><p>前6个月、后6个月及第二年<br/>均按10%执行。</p><div className="price-detail">微信支付手续费由商户另行承担</div></article><article className="price-card"><div className="price-label">第二年起</div><p className="price-number text">金额待定</p><h3>年度服务费</h3><p>年费金额待确定，续约前明确。商户可自主选择继续入驻或退出。</p><div className="price-detail">自愿续留 · 订单佣金10%</div></article></div>
<div className="phase-row"><div><span>正式开通至第6个月</span><strong>500元入驻费 + 10%佣金</strong><p>门店正式展示且可预约后起算，测试等待时间不计入。</p></div><div><span>第7至12个月</span><strong>10%订单佣金</strong><p>首年不另收年费，平台有效课程订单按10%计佣。</p></div><div><span>第二年起</span><strong>年费待定 + 10%佣金</strong><p>至少提前30天告知年费及服务内容，不自动续费。</p></div></div>
<div className="example"><div><p className="eyebrow">一笔订单，怎样拆开看</p><h3>顾客支付30元，<br/>商户能分得多少？</h3></div><div className="example-math"><div><span>示例订单金额</span><strong>¥30.00</strong></div><span className="math-sign">−</span><div><span>平台佣金10%</span><strong>¥3.00</strong></div><span className="math-sign">=</span><div className="math-result"><span>扣支付手续费前商户分得</span><strong>¥27.00</strong></div></div><p className="example-note">商户再承担该订单实际发生的微信支付手续费。此例未使用优惠券、未发生退款；27元不等于最终到账或经营利润。计佣、退款与结算方式详见下方合作规则。</p></div>
<CooperationRules phone={merchantPhone} phoneHref={merchantPhoneHref}/>
</div></section>

<section id="demo" className="wrap section"><div className="section-heading"><div><p className="eyebrow">03 / 小程序操作</p><h2 className="section-title">顾客轻松约，<br/>门店有序管。</h2></div><p className="section-lead">从找到课程到到店核销，分别看看顾客与商户的操作路径。点击步骤或箭头切换页面。</p></div><Demo/></section>

<section id="roadmap" className="roadmap-section"><div className="wrap section"><p className="eyebrow">04 / 区域拓展规划</p><h2 className="section-title">从身边的好场馆开始，<br/>一步一步，连接更多城市。</h2><div className="cities"><div className="current"><span>01 / 起步区域</span><h3>佛山 · 广州</h3><p>优先推进场馆沟通与合作准备</p></div><ArrowRight/><div><span>02 / 后续拓展</span><h3>深圳及广东重点城市</h3><p>在起步区域验证后逐步拓展</p></div><ArrowRight/><div><span>03 / 长期方向</span><h3>上海 · 北京</h3><p>在运营能力成熟后推进</p></div></div><p className="muted-note">以上为区域拓展规划，并非已开通城市清单；具体落地时间尚未确定。</p></div></section>

<section id="join" className="wrap section"><div className="section-heading"><div><p className="eyebrow">05 / 合作准备</p><h2 className="section-title">从认识你的场馆，<br/>到展示第一张课表。</h2></div><p className="section-lead">面向瑜伽、普拉提、健身等运动场馆。先了解合作方案，再结合本馆的课程和接待能力安排入驻。</p></div>
<div className="join-steps">{[['沟通合作','了解门店课程、开放席位及合作诉求。'],['确认规则','明确入驻费、退费条件、佣金及结算安排。'],['准备资料','提交门店资质、场馆信息及课程资料。'],['体验与上线','熟悉商户端操作，待审核与正式开通后展示课程。']].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
<div className="prepare-box" id="prepare"><ListChecks size={24}/><div><h3>洽谈前，可以先准备这些资料</h3><p>营业执照与门店名称 · 经营地址与联系人 · 场馆环境照片 · 老师和课程介绍 · 可开放课表与席位。结算账户资料在正式入驻流程中按要求提交。</p></div></div>
<div className="faq"><h3>商户常见问题</h3><Accordion>{faqs.map(([q,a],i)=><AccordionItem value={'faq-'+i} key={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent><p>{a}</p></AccordionContent></AccordionItem>)}</Accordion></div>
</section>
<section className="closing" id="contact"><div className="wrap"><div><p>让附近想运动的人，认识你的好课程。</p><h2>下一次被选择，<br/>从被看见开始。</h2></div><div className="contact-details"><span className="contact-label">招商咨询电话</span><a className="contact-number" href={merchantPhoneHref} aria-label={`拨打思翊招商咨询电话 ${merchantPhone}`}>{merchantPhone}</a><div className="contact-actions"><a className="button lime" href={merchantPhoneHref}><Phone size={19}/> 电话咨询入驻</a><a className="contact-prepare" href="#prepare">查看入驻资料 <ArrowUpRight size={17}/></a></div><p>欢迎瑜伽、普拉提、健身等运动场馆咨询合作。<br/>正式入驻入口将于上线后公布。</p></div></div></section>
</main><footer className="wrap site-footer"><a className="brand" href="#top" aria-label="思翊首页"><img className="brand-logo" src={`${assetBase}brand-logo.png`} alt="" width="1254" height="1254" loading="lazy"/>思翊<span>身心平衡</span></a><p>平台连接用户与场馆，线下课程由入驻场馆提供。<br/>本页为合作方案初稿 · 小程序测试中 · 2026.09</p><div className="footer-links"><a href={merchantPhoneHref}>招商咨询：{merchantPhone}</a><a href="#top">返回顶部 ↑</a></div></footer>
</>; }
