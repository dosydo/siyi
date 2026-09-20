import { CalendarDays, Phone, ShieldCheck, Wallet, ArrowRight } from 'lucide-react';

export const cooperationCopy = {
  refund: '首次入驻费500元，包含首年的基础入驻服务，不另收首年年费。半年体验期从门店正式展示且可接受预约之日起计算6个自然月，测试等待时间不占用体验期。商户实际使用后，若认为没有获得获客收益或经营便利，可在半年内说明原因并申请。平台结合预约与使用记录核实，通过后全额退还500元，不以“曾经有过一单”作为唯一拒退理由。',
  application: '致电13353043351登记，提供门店名称、开通日期及退费原因。收到申请后2个工作日内响应、5个工作日内回复处理结果；审核通过后7个工作日内发起退款，实际入账时间以支付渠道处理为准。申请不等于自动通过。',
  commission: '只对通过思翊产生并实际完成的有效课程订单收取10%佣金，按顾客实际支付、扣除退款后的课程金额计算。商户自行成交的线下订单不计入；顾客通过思翊再次购课，仍按同一口径计算。商户出资优惠降低顾客实付和计佣基数，平台出资补贴另行入账，不再抽佣。',
  orderRefund: '全额退款的订单不收课程佣金，已收佣金冲回；部分退款按剩余有效课程金额重算，多收部分退回或在下一期抵扣。微信支付手续费按实际发生及渠道退回情况核对。',
  settlement: '当前方案按周结算：每周三结算上一周周一至周日已上课、已核销且无争议的订单，并提供佣金、手续费、退款等明细。未上课、未核销或退款争议中的订单暂不纳入当期结算。结算日与银行卡到账日不同，具体到账时间需在支付渠道核实后确定。',
  renewal: '第二年起收取年费，金额待确定。首年到期至少30天前，告知下一年年费及服务内容，由商户自主选择续留或退出。继续入驻才缴年费，不自动续费或扣款；不续留不收第二年年费。续留期间订单佣金仍为10%，微信支付手续费由商户承担。退出时妥善处理已有预约、退款及未结款项。',
};

const refundSteps = [
  { number: '02', unit: '个工作日内', title: '响应申请', text: '收到申请后联系门店，核对登记信息。' },
  { number: '05', unit: '个工作日内', title: '回复处理结果', text: '从收到申请起计算，结合预约与使用记录核实。' },
  { number: '07', unit: '个工作日内', title: '通过后发起退款', text: '从审核通过起计算，发起500元入驻费退款。' },
];

export function CooperationRules({ phone, phoneHref }: { phone: string; phoneHref: string }) {
  return <div className="cooperation-rules">
    <section id="refund" className="refund-policy" aria-labelledby="refund-title">
      <div className="rules-heading"><ShieldCheck size={25}/><div><p className="eyebrow">半年体验 · 入驻费退费</p><h3 id="refund-title">试用之后，再判断是否适合你的场馆。</h3></div></div>
      <p className="policy-intro">{cooperationCopy.refund}</p>
      <div className="refund-apply"><div><strong>怎样申请</strong><p>电话登记，提供门店名称、开通日期和退费原因。</p></div><a href={phoneHref}><Phone size={17}/>{phone}<ArrowRight size={16}/></a></div>
      <ol className="refund-timeline">{refundSteps.map(step => <li key={step.number}><div><strong>{step.number}</strong><span>{step.unit}</span></div><h4>{step.title}</h4><p>{step.text}</p></li>)}</ol>
      <p className="policy-note">申请不等于自动通过。上述期限为响应、审核及发起退款的时间，实际入账时间以支付渠道处理为准。</p>
    </section>
    <div className="cooperation-rule-grid">
      <article className="cooperation-rule-card" id="commission-rules"><p className="eyebrow">01 / 佣金怎样算</p><h3>按实际成交收取10%</h3><p>{cooperationCopy.commission}</p><div className="commission-formula">课程订单佣金 =<br/><strong>（顾客实付课程金额 − 已退课程金额）× 10%</strong></div><p className="policy-note">例如：30元课程使用商户5元优惠后，顾客实付25元，佣金为2.50元；商户分得22.50元，再承担实际支付手续费。</p></article>
      <article className="cooperation-rule-card"><p className="eyebrow">02 / 退款怎样核对</p><h3>退款后，同步调整佣金</h3><p>{cooperationCopy.orderRefund}</p><div className="rule-callout"><Wallet size={20}/><p>平台佣金与微信支付手续费分别列明。微信支付手续费由商户承担，实际费率以最终接入及签约规则为准。</p></div></article>
      <article className="cooperation-rule-card" id="settlement"><p className="eyebrow">03 / 商户怎样结算</p><h3>每周三，核对上一周的有效订单</h3><p>{cooperationCopy.settlement}</p><div className="rule-callout"><CalendarDays size={20}/><p>周结为当前合作方案。支付渠道与具体到账时间仍待核实，正式开通前会向商户说明。</p></div></article>
      <article className="cooperation-rule-card" id="renewal"><p className="eyebrow">04 / 第二年怎样选择</p><h3>续留或退出，由商户决定</h3><p>{cooperationCopy.renewal}</p><div className="renewal-points"><span>提前至少30天告知</span><span>不自动扣费</span><span>年费金额待确定</span></div></article>
    </div>
  </div>;
}
