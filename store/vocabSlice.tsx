// @ts-ignore
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {axiosInstance} from "../plugins/axios";
import {ENG_KOR_TRANSLATE} from '@/app/api/route';
//
// export const fetchRandomVocab = createAsyncThunk('vocabRandom/fetch', async (arg, {rejectWithValue: rejectWithValue}) => {
//     try {
//         let response
//         await axiosInstance.get('https://jlpt-vocab-api.vercel.app/api/words/random')
//             .then(async (res) => {
//                 if (res.status === 200) {
//                     const response = res.data;
//                     return response;
//                 } else {
//                     throw new Error('BLOCK PAGE');
//                 }
//             })
//             .then(async (res) => {
//                 arg.onSuccess(res.meaning);
//                 response = res
//             })
//         return response
//     } catch (e) {
//         args.onFail();
//         return rejectWithValue(e);
//     }
// })
// export const fetchVocabByLevel = createAsyncThunk('vocabLevel/fetch', async ({level, page, onSuccess, onFail}, {rejectWithValue: rejectWithValue}) => {
//     if (level !== undefined) {
//         try {
//             let response
//             await axiosInstance.get(`https://jlpt-vocab-api.vercel.app/api/words?offset=${page}&limit=15&level=${level}`)
//                 .then(async (res) => {
//                     if (res.status === 200) {
//                         response = res.data;
//                         onSuccess(res.data.words);
//                         return res.data;
//                     } else {
//                         onFail();
//                     }
//                 })
//             return response;
//         } catch (e) {
//             return rejectWithValue(e);
//         }
//     }
// })
//
// export const fetchEngKorTranslation = createAsyncThunk('translation/fetch', async(arg, {rejectWithValue: rejectWithValue}) => {
//     try {
//         let transResponse = { result: [], type: 'NOT READY' };
//         const param = {source: 'en', target: 'ko', text: ''};
//         if (arg?.dataType === 'word') {
//             param.text = arg?.meaning;
//             const translate = await ENG_KOR_TRANSLATE(param);
//             if (translate.error) {
//                 throw new Error('TRANSLATION ERROR');
//             } else {
//                 transResponse = { result: translate?.translatedText, type: 'word' }
//                 return transResponse;
//             }
//         } else {
//             let resultArr: any[] = [];
//             let result
//             arg?.meaning?.forEach(async(data) => {
//                 param.text = data.meaning;
//                 const translate = await ENG_KOR_TRANSLATE(param);
//                 if (translate.error) {
//                     throw new Error('TRANSLATION ERROR');
//                 } else {
//                     const newData = { ...data, translation: translate?.translatedText}
//                     const two = JSON.stringify(newData)
//                     resultArr = [...resultArr, two]
//                 }
//                 if (resultArr?.length === arg?.meaning?.length) {
//                     result = resultArr.map(r => JSON.parse(r))
//                     // transResponse = { result: result, type: 'array'}
//                     arg?.getData(result);
//                     // return transResponse;
//                 }
//             })
//         }
//     } catch (e) {
//         return rejectWithValue(e);
//     }
// })

const initialState = {
    randomWord: {},
    levelWord: [],
    levelWordTotal: 1,
    loading: false,
    tLoading: true,
    translation: {},
    isError: { state: false, content: '' }
}

export const vocabSlice = createSlice({
    name: 'vocab',
    initialState,
    reducers: {
        setLoading (state, action: PayloadAction<boolean>) {
            state.tLoading = action.payload
        },
        setTranslated (state, action: any) {
            state.levelWord = action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //     // 랜덤 단어 (메인페이지)
    //         .addCase(fetchRandomVocab.pending, (state, action) => {
    //             state.loading = true
    //         })
    //         .addCase(fetchRandomVocab.fulfilled, (state, action) => {
    //             state.randomWord = action.payload
    //             state.loading = false
    //             state.isError.state = false
    //         })
    //         .addCase(fetchRandomVocab.rejected, (state, action) => {
    //             state.loading = false
    //             state.isError.state = true
    //             state.isError.content = action.payload?.message
    //         })
    //
    //         // 레벨별 단어
    //         .addCase(fetchVocabByLevel.pending, (state, action) => {
    //             state.loading = true
    //         })
    //         .addCase(fetchVocabByLevel.fulfilled, (state, action) => {
    //             state.loading = false
    //             state.levelWord = action.payload?.words
    //             state.levelWordTotal = action.payload?.total
    //         })
    //         .addCase(fetchVocabByLevel.rejected, (state, action) => {
    //             state.loading = false
    //             state.isError.state = true
    //             state.isError.content = action.payload?.message
    //         })
    //
    //         // 영 ↔️ 일 번역
    //         .addCase(fetchEngKorTranslation.pending, (state, action) => {
    //             state.tLoading = true
    //         })
    //         .addCase(fetchEngKorTranslation.rejected, (state, action) => {
    //             state.tLoading = false
    //             state.isError.state = true
    //             state.isError.content = action.payload?.message
    //         })
    //         .addCase(fetchEngKorTranslation.fulfilled, (state, action) => {
    //             state.tLoading = false
    //             state.isError.state = false
    //             if (action.payload?.type === 'word') {
    //                 state.randomWord.translation = action.payload?.result
    //             } else {
    //                 state.tLoading = true
    //             }
    //         })
    // }
})

// Action creators are generated for each case reducer function
export const {setLoading, setTranslated} = vocabSlice.actions

export const vocabReducer = vocabSlice.reducer
