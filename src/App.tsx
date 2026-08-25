import { useState } from 'react';
import { Youtube, BookOpen, ExternalLink, FileText, FileDown } from 'lucide-react';

export default function App() {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-normal">
            آداب قضاء الحاجة ونواقض الوضوء
          </h1>
          <p className="text-slate-600 text-lg">
            في الفقه المالكي - شرح أسهل المسالك
          </p>
        </header>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://notebook.google.com/notebook/8d3e6c89-8905-4162-a710-aa1068a345b9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-emerald-600 text-white rounded-2xl shadow-sm hover:bg-emerald-700 hover:shadow-md transition-all group"
          >
            <ExternalLink className="w-6 h-6" />
            <span className="font-semibold text-lg">الدراسة التفاعلية</span>
          </a>

          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center justify-center gap-3 p-4 bg-white border border-slate-200 text-slate-700 rounded-2xl shadow-sm hover:bg-slate-50 hover:shadow-md transition-all group"
          >
            <FileText className="w-6 h-6 text-orange-500" />
            <span className="font-semibold text-lg">
              {showTranscript ? 'إخفاء التفريغ النصي' : 'عرض التفريغ النصي'}
            </span>
          </button>
        </div>

        {/* Video Section */}
        <section className="bg-white p-4 md:p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-50 rounded-lg">
              <Youtube className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-800">فيديو الدرس</h2>
          </div>
          
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-slate-100">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Bv7TZZ2klP4?si=JE_mer4snaEdwpTF" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>
        </section>

        {/* Text Transcript Section (Conditionally Rendered) */}
        {showTranscript && (
          <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
              <div className="p-2 bg-orange-50 rounded-lg">
                <FileText className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">التفريغ النصي</h2>
            </div>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800 border-b pb-2">أولًا: الأسئلة والأجوبة التمهيدية (المراجعة الفقهية)</h3>
                <p><strong>الشيخ:</strong> الحمد لله رب العالمين والصلاة والسلام على نبينا محمد وعلى آله وصحبه أجمعين، أما بعد: فهذا رجل متوضئ ارتد -والعياذ بالله- ثم رجع وتاب بعد دقيقة واحدة من ردته، فأراد أن يصلي، فهل له أن يصلي بوضوئه الأول؟</p>
                <p><strong>الطالب:</strong> ليس له شيء (ليس له ذلك).</p>
                <p><strong>الشيخ:</strong> أحسنت، أحسنت.</p>
                
                <p><strong>الشيخ:</strong> شكَّ هل توضأ بعد حدثه أو لم يتوضأ وأراد أن يصلي، هل يلزمه الوضوء أو لا يلزمه؟ تيقن الحدث وشكَّ هل توضأ أو لم يتوضأ، ما الحكم؟ هل يلزمه إذا أراد أن يصلي أن يتوضأ؟</p>
                <p><strong>الطالب:</strong> يلزمه الوضوء.</p>
                <p><strong>الشيخ:</strong> يلزمه، أحسنت.</p>
                
                <p><strong>الشيخ:</strong> توضأ للصلاة ثم رعف -أي خرج دم من أنفه- هل يلزمه أن يعيد الوضوء أو هو على وضوئه؟</p>
                <p><strong>الطالب:</strong> على وضوئه.</p>
                <p><strong>الشيخ:</strong> أحسنت، توضأ للصلاة ثم... هل يلزمه أن يعيد الوضوء؟ هو هو على وضوئه لم يتغير ولا يلزم.</p>
                
                <p><strong>الشيخ:</strong> هل القيء من نواقض الوضوء؟</p>
                <p><strong>الطالب:</strong> لا يلزمه، لا يلزمه.</p>
                <p><strong>الشيخ:</strong> أحسنت، إن كان متغيرًا فهو نجس، لكن حتى لو كان نجسًا لا يلزمه أن يتوضأ.</p>
                
                <p><strong>الشيخ:</strong> متوضئ شرب خمرًا يظنه عصيرًا فسكر ثم رجع إليه عقله، هل يلزمه إذا أراد الصلاة أن يتوضأ؟</p>
                <p><strong>الطالب:</strong> نعم يلزمه.</p>
                <p><strong>الشيخ:</strong> أحسنت.</p>
                
                <p><strong>الشيخ:</strong> استتر عقله ببنج المخدر الذي يسبق العملية الجراحية، فهل يلزمه أن يتوضأ إذا يصلي مع أنه كان على وضوء قبل أن يعطى هذا المخدر؟</p>
                <p><strong>الطالب:</strong> نعم يلزمه.</p>
                <p><strong>الشيخ:</strong> نعم يلزمه، أحسنتم.</p>
                
                <p><strong>الشيخ:</strong> نام نومًا ثقيلًا.. نام نومًا ثقيلًا قصيرًا، هل يلزمه الوضوء إذا أراد الصلاة؟</p>
                <p><strong>الطالب:</strong> يلزمه.</p>
                <p><strong>الشيخ:</strong> أحسنتم، نعم، ولو كان قصيرًا ما دام ثقيلًا يلزمه الوضوء.</p>
                
                <p><strong>الشيخ:</strong> ما المذهب في من لمس زوجته بلذة، هل ينتقض وضوؤه؟</p>
                <p><strong>الطالب:</strong> نعم ينتقض وضوؤه (نعم ينتقض).</p>
                
                <p><strong>الشيخ:</strong> وما المذهب في من مس فرجه بظهر كفه، هل ينتقض وضوؤه؟</p>
                <p><strong>الطالب:</strong> لا ينتقض.</p>
                <p><strong>الشيخ:</strong> بظهر الكف لا ينتقض، أحسنتم، بارك الله فيكم، نعم تفضل الشيخ علي نسمع المتن.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800 border-b pb-2 mt-8">ثانيًا: قراءة متن "أسهل المسالك" (باب آداب قضاء الحاجة)</h3>
                <p><strong>القارئ (الشيخ علي):</strong> الحمد لله رب العالمين والصلاة والسلام على رسوله الأمين، وعلى آله وصحبه أجمعين، اللهم اغفر لنا ولشيخنا ولمشايخه أجمعين. باب آداب قضاء الحاجة. قال رحمه الله تعالى:</p>
                <div className="bg-slate-100 p-4 rounded-lg font-medium text-indigo-900 text-center leading-loose">
                  لِحَاجَةِ الإِنْسَانِ فَاسْكُتْ وَاجْلِسِ ... نَدْبًا وَبَوْلًا قِفْ بِرَخْوِ النَّجِسِ<br/>
                  وَالظِّلَّ وَالرِّيحَ وَجُحْرًا وَالصَّلْبِ ... وَالطُّرْقَ وَالْمَوْرِدَ كُلًّا فَاجْتَنِبْ<br/>
                  وَلَا تُقَابِلْ أَوْ تُدَابِرْ كَعْبَةِ ... فِي الْمَنْزِلِ الْوَطْءَ أَجِزْ وَالْفَضْلَةِ<br/>
                  وَنَحِّ ذِكْرَ اللهِ حَتْمًا فِي الْخَلَا ... وَاسْتَحْسَنُوا سَتْرًا وَبُعْدًا فِي الْفَلَا<br/>
                  قُلْ قَبْلَهُ وَبَعْدَهُ ذِكْرًا وَرَدْ ... وَلَمْ يَفُتْ قَبْلِيُّهُ إِنْ لَمْ يُعَدْ<br/>
                  لَا تَلْتَفِتْ وَلِلْمُزِيلِ فَاسْتَعِدْ ... وَرِجْلَكَ الْيُسْرَى عَلَيْهَا فَاعْتَمِدْ<br/>
                  وَفَرِّجِ الْفَخْذَيْنِ بِاسْتِرْخَاءِ ... مُسْتَجْمِرًا وِتْرًا وَعِنْدَ الْمَاءِ<br/>
                  يُقَدَّمُ الإِحْلِيلُ قَبْلَ الدُّبُرِ ... وَالْجَمْعُ بَيْنَ الْمَاءِ وَبَيْنَ الْحَجَرِ<br/>
                  فَاخْرُجْ بِيُمْنَاكَ وَبِاليُسْرَى ادْخُلِ ... وَالْمَسْجِدَ اعْكِسْ يُمْنَاً بِالْمَنْزِلِ<br/>
                  وَاسْتَبْرِ بِاسْتِفْرَاغِ مَا فِي المَخْرَجِ ... وَاسْتَبْرِ بِالثُّلْثِ وَبِالنَّتْرِ النَّجِي<br/>
                  مُسْتَجْمِرًا بِطَاهِرٍ مُنْقٍ جَمَدْ ... لَا نَقْدٍ اَوْ مَطْعُومٍ اَوْ مُؤْذٍ بِحَدّ<br/>
                  وَعَيَّنُوا الْمَاءَ فِي دَمٍ أَوْ مَذْيِ ... أَوْ حَيْضٍ أَوْ نِفَاسٍ أَوْ فِي مَنْيِ<br/>
                  أَوْ بَوْلِ أُنْثَى أَوْ خَصِيٍّ أَوْ يُرَى ... مُنْتَشِرًا عَنْ مَخْرَجٍ إِنْ كَثُرَا
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 border-b pb-2 mt-8">ثالثًا: شرح الشيخ التفصيلي لأبيات المتن</h3>
                
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">1. مقدمة في كمال الشريعة وكف الكلام حال قضاء الحاجة</h4>
                  <p>أحسنتم أحسنتم، بارك الله فيكم. هذا باب آداب قضاء الحاجة؛ أي ما يشرع للمسلم اتباعه من الأقوال والأفعال التي تناسب تلك الحال. ومجيء الإسلام بهذه الآداب دليل على كمال الشريعة ورعايتها لمصالح العباد واستيعابها لجميع الأمور النافعة، سواء ما كان من العبادات أو المعاملات أو الآداب أو الأخلاق.</p>
                  <p>قال: «في حاجة الإنسان»؛ والحاجة هنا كناية عن خروج البول والغائط. قال: «في حاجة الإنسان فاسكت»؛ أي كفَّ عن الكلام.</p>
                  <blockquote className="border-r-4 border-indigo-500 pr-4 bg-indigo-50 py-2 px-4 rounded-l my-4 text-indigo-900">
                    «إذا غوّط الرجلان فليتوارى كل واحد منهما عن صاحبه ولا يتحدثا، فإن الله يمقت على ذلك»
                  </blockquote>
                  <p>الشاهد من صحيح مسلم: «أن رجلًا مر على النبي صلى الله عليه وسلم وهو يبول فسلم عليه فلم يرد عليه».</p>
                  <p>لكن إن وجدت ضرورة أو حاجة إلى الكلام فلا بأس، بل قد يكون الكلام واجبًا كإرشاد أعمى يخشى ترديه في حفرة مثلًا.</p>
                  <p><strong>النقل الفقهي:</strong> قال العلامة خليل في مختصره: «وسكوتٌ إلا لمهمّ».</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">2. حكم الجلوس والبول قائمًا وتفصيل أقسام المكان</h4>
                  <p>قال: «في حاجة الإنسان فاسكت واجلسي ندبا»؛ ومحله إذا كان المكان رخوًا طاهرًا لأنه أقرب للستر. ويدل على الجلوس حديث عائشة رضي الله عنها أنها قالت:</p>
                  <blockquote className="border-r-4 border-indigo-500 pr-4 bg-indigo-50 py-2 px-4 rounded-l my-4 text-indigo-900">
                    «من حدثكم أن رسول الله صلى الله عليه وسلم بال قائمًا فلا تصدقوه، ما كان يبول إلا جالسًا».
                  </blockquote>
                  <p>أما النهي عن البول قائمًا فلم يثبت عن النبي صلى الله عليه وسلم فيه شيء، لكنه سنة النبي صلى الله عليه وسلم الغالبة.</p>
                  <p>والأمكنة من حيث الرطوبة والصلابة، والطهارة والنجاسة تنقسم إلى أربعة أقسام:</p>
                  <ul className="list-disc list-inside space-y-1 my-2">
                    <li>طاهر صلب</li>
                    <li>طاهر رخو</li>
                    <li>نجس صلب</li>
                    <li>نجس رخو</li>
                  </ul>
                  <p>وقد صاغ ذلك الشريسي ناظمًا فقال:</p>
                  <div className="bg-slate-100 p-4 rounded-lg font-medium text-indigo-900 text-center leading-loose my-4">
                    بِالطَّاهِرِ الصَّلْبِ اجْلِسِي ... وَقُمْ بِرَخْوِ النَّجِسِ<br/>
                    وَالنَّجِسِ الصَّلْبِ اجْتَنِبْ ... وَاجْلِسْ وَقُمْ إِنْ تَعْكِسِي
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">3. المواضع التي ينبغي لقاضي الحاجة تجنبها</h4>
                  <p>قال: «والظل والريح وجحرا والصلب والطرق والمورد كلا فاجتنب». هذه مواضع ينبغي لقاضي الحاجة تجنبها وهي:</p>
                  <ul className="list-disc list-inside space-y-2 my-2">
                    <li><strong>الظل:</strong> يتجنب قضاء الحاجة في الظل، ومثله الموضع الذي يتشمس فيه الناس في الشتاء.</li>
                    <li><strong>الريح:</strong> أي الجبهة والجهة التي تهب منها الريح.</li>
                    <li><strong>الجحر:</strong> خوفًا من خروج الهوام التي تؤذيه.</li>
                    <li><strong>الصلب:</strong> أي المكان الصلب إن كان نجسًا.</li>
                    <li><strong>الطرق:</strong> يتجنب قضاء الحاجة في طرق الناس.</li>
                    <li><strong>المورد:</strong> وهو محل ورود الناس لشرب الماء.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">4. استقبال القبلة واستدبارها والوطء في الفضاء والبنيان</h4>
                  <p>قال: «ولا تقابل أو تدابر كعبة في المنزل وطأ أجز والفضلة». المعتمد في المذهب المالكي أن الاستقبال والاستدبار للكعبة في الفضاء محرم، وغير هذه الصورة جائز.</p>
                  <p><strong>الأصل في التحريم في الفضاء:</strong> حديث أبي أيوب الأنصاري رضي الله عنه: «لا تستقبلوا القبلة ولا تستدبروها بغائط أو بول ولكن شرقوا أو غربوا».</p>
                  <p><strong>دليل الجواز في البنيان (المنزل):</strong> حديث ابن عمر رضي الله عنهما: «رقيت يومًا على بيت حفصة، فرأيت رسول الله صلى الله عليه وسلم يقضي حاجته مستقبل الشام مستدبر الكعبة».</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">5. حكم تنحية ذكر الله تعالى</h4>
                  <p>قال: «ونحي ذكر الله حتمًا في الخلا». تنحية ذكر الله تكون لفظًا وخطًا؛ فلا تذكر الله بلسانك، وأيضًا لا تدخل مكان قضاء الحاجة بورقة مثلًا فيها ذكر الله.</p>
                  <ul className="list-disc list-inside space-y-1 my-2">
                    <li>ندبًا في غير القرآن: ما لم يكن مستورًا أو خاف عليه الضياع وإلا جاز.</li>
                    <li>وجوبًا في القرآن: إلا لخوف ضياعه. وهذا كله من تعظيم ذكر الله عز وجل.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">6. الاستتار والابتعاد في الفلا</h4>
                  <p>قال: «واستحسنوا سترًا وبعدًا في الفلا». هذان أدبان متفق على استحبابهما في الصحراء:</p>
                  <ul className="list-disc list-inside space-y-1 my-2">
                    <li><strong>الابتعاد:</strong> يبتعد بحيث لا يُسمع له صوت ولا تُشم له رائحة.</li>
                    <li><strong>الاستتار:</strong> يستتر بحيث لا يرى له شخص. وأما ستره لعورته بحيث لا تُرى فهذا واجب.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">7. الأذكار الواردة قبل وبعد قضاء الحاجة</h4>
                  <p>قال: «قل قبله وبعده ذكرًا ورد ولم يفت قبليه إن لم يعد».</p>
                  <p><strong>الذكر قبل الدخول:</strong> ورد في الصحيحين: «اللهم إني أعوذ بك من الخبث والخبائث».</p>
                  <p><strong>الذكر بعد الخروج:</strong> ورد في حديث عائشة رضي الله عنها أنه صلى الله عليه وسلم: «كان إذا خرج من الغائط قال غفرانك».</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">8. آداب الهيئة (عدم الالتفات، الاستعداد للمزيل، والاعتماد على اليسرى)</h4>
                  <p>قال: «لا تلتفت وللمزيل فاستعد».</p>
                  <ul className="list-disc list-inside space-y-1 my-2">
                    <li><strong>عدم الالتفات:</strong> مخافة أن يرى الملتفت ما يشوش عليه فيقوم وتتلطخ ثيابه.</li>
                    <li><strong>الاستعداد للمزيل:</strong> أي فاعدَّ وهيئ ما تزيل به النجاسة قبل البدء.</li>
                    <li><strong>الاعتماد على اليسرى:</strong> قالوا لأنه أعون على خروج الخارج وأكثر إعانة.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">9. تفريج الفخذين وصفة الاستجمار</h4>
                  <p>قال: «وفرج الفخذين باسترخاء مستجمرًا وترًا وعند الماء يقدم الإحليل قبل الدبر».</p>
                  <p><strong>الاستجمار وترًا:</strong> لقوله صلى الله عليه وسلم: «من استجمر فليوتر». والقدر الذي تحصل به الإزالة واجب، وما زاد بعد الإزالة يندب فيه الإيتار.</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">10. الجمع بين الماء والحجر في التطهر</h4>
                  <p>قال: «والجمع بين الماء وبين الحجر». يندب الجمع بين الاستجمار بالأحجار أولًا ثم الاستنجاء بالماء.</p>
                  <p><strong>مراتب التطهر:</strong></p>
                  <ol className="list-decimal list-inside space-y-1 my-2">
                    <li>الجمع بين الحجارة والماء. (الأكمل)</li>
                    <li>الاقتصار على الماء.</li>
                    <li>الاقتصار على الأحجار.</li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">11. آداب الدخول والخروج في المواضع المختلفة</h4>
                  <p>قال: «فاخرج بيمناك وباليسرى ادخل والمسجد اعكس يمنًا بالمنزل».</p>
                  <p>القاعدة العامة: اليمنى تقدم فيما كان من باب التكريم واليسرى في ضد ذلك.</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">12. صفة الاستبراء والسلت والنتر</h4>
                  <p>قال: «واستبر باستفراغ ما في المخرج واستبر بالثلث وبنتر النجي». المقصود بالاستبراء هو استفراغ ما في المخرجين من الأذى.</p>
                  <p><strong>السلت والنتر:</strong> يكونان بخفة، ويشدد أهل المذهب على أن يكون السلت والنتر بخفة لمن فعلهما لئلا يسبب الوسوسة وسلس البول.</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">13. شروط ما يستجمر به وما يجزئ</h4>
                  <p>قال: «مستجمرًا بطاهر منقٍ جمد لا نقد أو مطعوم أو مؤذٍ بحد».</p>
                  <p>يشترط في الآلة التي يستجمر بها: أن تكون طاهرة، منقية، جامدة. ويحرم الاستجمار بالنقد (الذهب والفضة)، وبالمطعوم (كالخبز)، والمؤذي بحد (كالزجاج).</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">14. النجاسات والأحوال التي يتعين فيها الماء</h4>
                  <p>قال: «وعينوا الماء في دم أو مذي أو حيض أو نفاس أو في مني أو بول أنثى أو خصي أو يرى منتشرًا عن مخرج إن كثر».</p>
                  <p>الأحاديث التي وردت بالترخيص في الاستجمار بالأحجار إنما هي في البول والغائط المعتادين، أما المذي والدم والمني وبول الأنثى وما انتشر عن المخرج انتشارًا كثيرًا فيتعين فيه الغسل بالماء.</p>
                </div>

                <div className="mt-8 pt-6 border-t text-center text-slate-500 italic">
                  <p>الشيخ: جزاكم الله خيرًا وبارك الله فيكم. سبحانك اللهم وبحمدك أشهد أن لا إله إلا أنت أستغفرك وأتوب إليك.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Embedded PDF Viewer Section */}
        <section className="bg-white p-4 md:p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-[600px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <BookOpen className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">كتاب الدرس</h2>
            </div>
            <a 
              href="/lesson.pdf" 
              download 
              className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors"
            >
              <FileDown className="w-4 h-4" />
              تحميل
            </a>
          </div>
          
          <div className="flex-1 w-full bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
            <iframe 
              src="/lesson.pdf" 
              className="w-full h-full border-none"
              title="ملف PDF للدرس"
            />
          </div>
        </section>

      </div>
    </div>
  );
}
